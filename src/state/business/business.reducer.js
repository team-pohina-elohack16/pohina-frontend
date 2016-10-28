const INITIAL_STATE = {
  data: [ // Example datasets:
    {
      title: "Avatut ohjelmistoalan yritykset",
      values: [ 104, 79, 77, 83, 92, 85, 89, 77, 103, 68, 91, 79, 104 ]
    },
    {
      title: "Suljetut ohjelmistoalan yritykset",
      values: [ 41, 32, 34, 72, 45, 66, 62, 113, 46, 50, 40, 84 ]
    }
  ]
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
