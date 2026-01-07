export const Register = [
  {
    id: "step-1",
    title: "Step 1",
    description: "What's your name",
    inputs: [
      {
        label: "Enter your firstname",
        id: "reg-firstname",
        name: "firstname",
        type: "text",
        required: true
      },
      {
        label: "Enter your lastname",
        id: "reg-lastname",
        name: "lastname",
        type: "text",
        required: true
      }
    ]
  },
    {
    id: "step-2",
    title: "Step 2",
    description: "How can Marsdove_bot contact you?",
    inputs: [
      {
        label: "Enter your phone number",
        id: "reg-phone",
        name: "phone",
        type: "tel",
        required: true
      },
      {
        label: "Enter your telegram chatId",
        id: "chatId",
        name: "chatId",
        type: "number",
        required: true
      }
    ]
  },
  {
    id: "step-3",
    title: "Final step",
    description: "Set up a strong password to access your account",
    inputs: [
      {
        label: "Create a strong password",
        id: "password",
        name: "password",
        type: "password",
        required: true
      },
      {
        label:"Confirm your password",
        id: "new-password",
        name: "newPassword",
        type: "password",
        required: true
      }
    ]
  }
];