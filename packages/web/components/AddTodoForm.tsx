import { Formik } from "formik";
import { useQueryClient } from "react-query";

import { trpc } from "../api/APIProvider";
import { useErrorNotificationToast } from "../hooks/useErrorNotificationToast";

const AddTodoForm = () => {
  const queryClient = useQueryClient();

  const createTodoMutation = trpc.useMutation("todos/create", {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos/own"], { exact: false });
    },
  });
  useErrorNotificationToast(createTodoMutation.error?.message);

  return (
    <Formik
      initialValues={{ text: "" }}
      onSubmit={async (values, { resetForm }) => {
        try {
          await createTodoMutation.mutateAsync(values);
          resetForm();
        } catch (err) {}
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="">
            <input
              type="text"
              name="text"
              autoComplete="off"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.text}
              placeholder="Enter to submit"
              className="block text-gray-700 text-sm font-bold mb-2 py-2 border px-4 bg-gray-50 w-full"
            />
            {touched.text && errors.text}
          </div>
        </form>
      )}
    </Formik>
  );
};
export default AddTodoForm;
