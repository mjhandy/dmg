export const formConfig = [
  {
    type: 'text',
    label: 'Name',
    name: 'name',
    value: '',
    validations: [
      {
        name: 'required',
        validator: 'required',
        message: 'Name is required'
      }
    ]
  },
  {
    type: 'email',
    label: 'Your Email Address',
    name: 'email',
    value: '',
    validations: [
      {
        name: 'required',
        validator: 'required',
        message: 'A valid email is required'
      }
    ]
  },
  {
    type: 'textarea',
    label: 'Message',
    name: 'message',
    value: '',
    rows: 10,
    cols: 10,
    validations:[
      {
        name: 'required',
        validator: 'required',
        message: 'Please leave a message.'
      }
    ]
  }
];