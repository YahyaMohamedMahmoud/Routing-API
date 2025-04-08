import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerScheme, type RegisterScheme } from "~/schema/registerScheme"

const AuthForm = () => {

    const {register , handleSubmit , formState:{errors} , clearErrors , reset} = useForm<RegisterScheme>({
        resolver : zodResolver(registerScheme),
        // defaultValues:{
        //     username:"Yahya",
        // }
    })
    


    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target
    //     setUserData({
    //         ...userData,
    //         [name]: value
    //     })
    // }
    const onSubmit = (data: RegisterScheme) => {
        reset()
        console.log(data)
        
    };



  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className=" space-y-2 w-full max-w-sm mx-auto mt-10">
        <Input placeholder="Username" {...register("username")} />
        {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        <Input placeholder="Email" type="email" {...register("email")}/>
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <Input placeholder="Password" type="password" {...register("password")}/>
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        <Button type="submit" className="w-full">Submit</Button>
    </form>
    </>
  )
}

export default AuthForm