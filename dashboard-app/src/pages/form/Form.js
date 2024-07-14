import { Box, MenuItem, Stack, Button, Snackbar, Alert } from "@mui/material";
import React, { useEffect } from "react";
import TextField from '@mui/material/TextField';

// import hook form
import { useForm } from "react-hook-form"
import Header from "../../components/Header";




// function data =>> المفروض يعمل تكرار بعدد العناصر الموجودة هنا
    const data = [
        {
        value: 'Manager',
        label: 'Manager',
        },
        {
        value: 'Admin',
        label: 'Admin',
        },
        {
        value: 'User',
        label: 'User',
        },
    ];

// const regular email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;





const Form = () => {


   



    // consts 
    const { register, handleSubmit, watch, formState: { errors },} = useForm()
        const onSubmit  = () => {
            handleClick()
        }

    // open , setOpen
    const [open, setOpen] = React.useState(false);


    // handle close
const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpen(false);
}; 


    // المسؤولة انها تشغل ال snack bar 
    const handleClick = () => {
        setOpen(true);
        };


        // states =>> variables >> id, name, email, number, access
        // const [id, setId] = useState("")
        // const [name, setName] = useState("")
        // const [email, setEmail] = useState("")
        // const [number, setNumber] = useState("")
        // const [access, setAccess] = useState("")

    return(
    <Box
    onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
        }}
        noValidate
        autoComplete="off"
        >
            <Header title={"CREATE USER"} subtitle={"Create a New User Profile"} />
            <Stack sx={{gap: 3}} direction="row">

            <TextField
            
            error={Boolean(errors.id)} 
        helperText= {Boolean(errors.id)? "This Field Is Required !" : null} 
        {...register("id", { required: true, maxLength: 5})}
        id="filled-basic" label="ID" variant="filled" />


        <TextField
        
        error={Boolean(errors.Name)} 
        helperText= {Boolean(errors.firstName) ? "This Field Is Required !" : null}
        {...register("Name", { required: true, maxLength: 20 })}
        sx={{flex: 1}} label="Name" variant="filled" />

            </Stack>



        <TextField 
        error={Boolean(errors.email)} 
        helperText = "Please Write a correct email !" 
        {...register("email", { required: true, pattern: emailRegex  })}
        id="filled-basic" label="Email" variant="outlined" />



        <TextField 
        error={Boolean(errors.number)} 
        helperText= {Boolean(errors.number)? "This Field Is Required !" : null} 
        {...register("number", { required: true, maxLength: 11})}
        id="filled-basic" label="Contact Number" variant="filled" />

        {/* <TextField id="filled-basic" label="Address 2" variant="outlined" /> */}




        <TextField
            
            id="outlined-select-currency"
            select
            label="Role"
            defaultValue="User"
            helperText="Please select your Role"
        >
            {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
                {option.label}
            </MenuItem>
            ))}
        </TextField>


                <Box sx={{textAlign: "right"}}>
                    <Button type="submit" sx={{textTransform: "capitalize"}} variant="contained" >
                        Create New user
                    </Button>


        <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                Account Created Successfull!
            </Alert>
        </Snackbar>
                </Box>
    </Box>
    )
}
export default Form;

