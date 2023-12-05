export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: [...state.tasks.filter((v) => v.id !== action.id)],
      };

    case "EDIT":
      return {
        ...state,
        tasks: [...state.tasks].map((list) => {
          if (list.id === action.id) {
            return {
              ...list,
              task: action.input,
            };
          }
          return list;
        }),
      };
    default:
      return state;
  }
};

// case "EDIT":
//   return {
//     ...state,
//     tasks: state.tasks.map((task) => {
//       if (task.id === action.id) {
//         // Return the updated task
//         return {
//           ...task,
//           task: action.input,
//         };
//       }
//       // Return the unchanged task
//       return task;
//     }),
//   };
