import Login from "../Login";
import Registration,{validateEmail} from "../Registration";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const onSubmit = jest.fn();

// describe("Test the Login Component", ()=>{
//     test("render the login form submit button the screen", async()=>{
//         render(<Login/>);
//         const buttonList = await screen.findAllByRole("button");
//         expect(buttonList).toHaveLength(2);
//     });

//     test("should be failed on email validation", ()=>{
//         const testEmail = "pavan.com";
//         expect(validateEmail(testEmail)).not.toBe(true);
//     });

//     test("email input field should be accept email", ()=>{
//         render(<Login/>);
//         const email = screen.getByLabelText("Email");
//         userEvent.type(email, "pavan");
//         expect(email.value).not.toMatch("pavan@gmail.com");    
//     });

//     test("password input should be input password",()=>{
//         render(<Login/>);
//         const password = screen.getByLabelText("Password");
//         expect(password).toHaveAttribute("type", "password");
//     });

//     test("should display alert if Error",()=>{
//         render(<Login/>);
//         const email = screen.getByLabelText("Email");
//         const password = screen.getByLabelText("Password");
//         const buttonList = screen.getAllByRole("button");
        
//         userEvent.type(email, "pavan");
//         userEvent.type(password, "1123456");
//         userEvent.click(buttonList[0]);

//         const error = screen.getByText("Email is not valid");
//         expect(error).toBeInTheDocument();
//     });

//     test("should be able to reset the form", ()=>{
//         const{ getByTestId} = render(<Login/>);
//         const resetBtn = getByTestId("reset");
//         const emailNode = screen.getByLabelText("Email");
//         const passwordNode = screen.getByLabelText("Password");
//         fireEvent.click(resetBtn);
//         expect(emailNode.value).toMatch("");
//         expect(passwordNode.value).toMatch("");
//     })

//     test("should be able to submit the form",()=>{
//         render(<Login/>);

//         const emailis = screen.getByLabelText("Email");
//         const passwordis = screen.getByLabelText("Password");

//         const submitBtn = screen.getAllByRole("button");
        
//         userEvent.type(emailis, "pavan@gmail.com");
//         userEvent.type(passwordis,"1234567");
//         userEvent.click(submitBtn[0]);
        
//         const user = screen.getByText("pavan@gmail.com");
//         expect(user).toBeInTheDocument();
        
//     })
// })

describe("Test the Registration Component", ()=>{
        test("render the registration component by clicking of submit", async()=>{
            render(<Registration/>);
            const buttonList1 = await screen.findAllByRole("button");
            expect(buttonList1).toHaveLength(2);
        })
        test("should be fail on email validation", ()=>{
            render(<Registration/>);
            const testEmail1 = "pavan.com";
            expect(validateEmail(testEmail1)).not.toBe(true);
        })
        test("should be success on email validation", ()=>{
            render(<Registration/>);
            const testEmail2 = "pavan@gmail.com";
            expect(validateEmail(testEmail2)).toBe(true);
        })
        // test("should be accept password",()=>{
        //     render(<Registration/>);
        //     const pass = screen.getByPlaceholderLabel(password1);
        //     const pass2 = screen.getByPlaceholderText(confirmPassword);
        //     const pass3 = screen.getByText(pass==pass2);
        //     expect(pass3).toBe(true);
        // })

        test("password input should be input password",()=>{
                    render(<Registration/>);
                    const password = screen.getByLabelText("Password");
                    expect(password).toHaveAttribute("type", "password");
                });
        test("password input should be input Confirm password",()=>{
            render(<Registration/>);
            const password = screen.getByLabelText("ConfirmPassword");
            expect(password).toHaveAttribute("type", "password");
        });

        test("should display alert if Error",()=>{
                    render(<Registration/>);
                    const email = screen.getByLabelText("Email");
                    const password = screen.getByLabelText("Password");
                    const cpassword = screen.getByLabelText("ConfirmPassword")
                    const buttonList = screen.getAllByRole("button");
                    
                    userEvent.type(email, "pavan");
                    userEvent.type(password, "1123456");
                    userEvent.type(cpassword, "1123456");
                    userEvent.click(buttonList[0]);
            
                    const error = screen.getByText("email is not valid");
                    expect(error).toBeInTheDocument();
         });
         test("should be able to reset the form", ()=>{
                    const{ getByTestId} = render(<Registration/>);
                    const resetBtn = getByTestId("reset");
                    const emailNode = screen.getByLabelText("Email");
                    const passwordNode = screen.getByLabelText("Password");
                    fireEvent.click(resetBtn);
                    expect(emailNode.value).toMatch("");
                    expect(passwordNode.value).toMatch("");
                });
                test("should be able to submit the form",()=>{
                    render(<Registration/>);
                    
                    const emailis = screen.getByLabelText("Email");
                    const passwordis = screen.getByLabelText("Password");
                    const passwordis1 = screen.getByLabelText("ConfirmPassword");
                    
                    const submitBtn = screen.getAllByRole("button");
                    
                    userEvent.type(emailis, "pavan@gmail.com");
                    userEvent.type(passwordis,"1234567");
                    userEvent.type(passwordis1,"1234567");
                    userEvent.click(submitBtn[0]);
                    
                    const user = screen.getByText("pavan@gmail.com");
                    expect(user).toBeInTheDocument();
                    
                })
            

})
