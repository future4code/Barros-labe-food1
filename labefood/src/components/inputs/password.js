// import {
//   FormControl,
//   FormLabel,
//   Input,
//   FormErrorMessage,
//   InputRightElement,
//   InputGroup,
//   IconButton,
//   Box,
//   Button,
//   FormHelperText,
// } from "@chakra-ui/react";
// import { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import {useForm} from '../../hooks/use-form'

// import { CenteredPageContainer,FormContainer } from "../styled-containers";




// export const PasswordInput = () => {

//   const [form, onChange, clearInputs] = useForm({
//     email:"",
//     password:"",
// });
// const [isEmailValid, setIsEmailValid] = useState(true)
// const [isPasswordValid, setIsPasswordValid]= useState(true)
// const [showPassword, setShowPassword] = useState(false)

// const onSubmit = (e) =>{
//   e.preventDefault();
//   console.log(form);
//   setIsEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email))
//   setIsPasswordValid(/.{6,}/.test(form.password))
// }

//   const onClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <FormContainer>
//       <form onSubmit={onSubmit}>
//         <Box p={0}>
//           <FormControl variant="floating" id="email" isRequired isInvalid={!isEmailValid}>
//             <Input
//               name="email"
//               type='email'
//               value={form.email}
//               onChange={onChange}
//               placeholder= ""
//             />
//             <FormLabel>E-mail</FormLabel>
//             {!isEmailValid ? (
//                         <FormErrorMessage as="p">
//                             E-mail inválido.
//                         </FormErrorMessage>
//                             ) : undefined}
//           </FormControl>
//           <FormControl variant="floating" id="password" isRequired isInvalid={!isPasswordValid}>
//             <InputGroup size='md'>
//               <Input
//                 name="password"
//                 value={form.password}
//                 onChange={onChange}
//                 pr='4.5rem'
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder=''
//               />
//               <FormLabel>Senha</FormLabel>
//                 <InputRightElement top="16px"  width='4.5rem'>
//                 <Button h='1.75rem' size='sm' onClick={onClickShowPassword}>
//                  {showPassword ? <FaEyeSlash/> : <FaEye/> }
//                 </Button>
//                </InputRightElement>
//             </InputGroup>
//                {!isPasswordValid ? (
//                     <FormHelperText as="p">
//                         E-mail inválido.
//                     </FormHelperText>
//                 ) : undefined}
//               </FormControl>
//               <Button width="100%" colorScheme="red" variant="solid">
//               Entrar
//               </Button>
//               <Button  width="100%"colorScheme="black" variant="ghost">
//               Não possui cadastro? Clique aqui.
//               </Button>
// </Box>
// </form>
// </FormContainer>
//     );
//   };
  

//   <Button colorScheme="red" variant="solid">
//   Entrar
// </Button>
// <Button colorScheme="black" variant="ghost">
//   Não possui cadastro? Clique aqui.
// </Button>
  // <Box p={0}>
  //   <FormControl variant="floating" id="password" isRequired isInvalid>
  //     <Input name="email" value={value} onChange={onChange} type={showPassword ? 'text' : 'password'} />
  //     <FormLabel>Senha</FormLabel>
  //     <InputGroup size="md">
  //       <InputRightElement width="4.5rem">
  //         <IconButton
  //           variant="eye-icon"
  //           icon={showPassword ? <FaEyeSlash /> : <FaEye />}
  //           h="1.75rem"
  //           size="sm"
  //           onClick={onClickShowPassword}
  //         />
  //       </InputRightElement>
  //     </InputGroup>
  //     {!isValid ? (
  //       <FormErrorMessage as="p">
  //         A senha deve conter ao menos 6 caracteres
  //       </FormErrorMessage>
  //     ) : undefined}
  //   </FormControl>
  // </Box>