import { Formik } from "formik";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { trpc } from "../api/APIProvider";
import Button from "../components/Button";
import { useAuth } from "../contexts/auth";
import MainLayout, { Card } from "../layouts/MainLayout";

const Signup: NextPage = () => {
  const signupMutation = trpc.useMutation("auth/signup");
  const { authenticate } = useAuth();
  return (
    <MainLayout>
      <Card className="max-w-max px-20 mx-auto">
        <h1 className="text-xl mb-10 font-bold text-center">Sign Up</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            try {
              const { token } = await signupMutation.mutateAsync(values);
              authenticate(token);
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
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-20">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="block text-gray-700 text-sm font-bold mb-2 py-2 border px-4 bg-gray-50 w-full"
                />
                {errors.email && touched.email && errors.email}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="block text-gray-700 text-sm font-bold mb-2 py-2 border px-4 bg-gray-50 w-full"
                />
                {errors.password && touched.password && errors.password}
              </div>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </Card>
    </MainLayout>
  );
};

export default Signup;
