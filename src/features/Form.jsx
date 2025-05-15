import { useForm } from "react-hook-form";
import ButtonSecondary from "../ui/ButtonSecondary";
import { useMutation } from "@tanstack/react-query";
import { updateFormData } from "../services/apiForm";
import toast from "react-hot-toast";

function Form() {
  const styles = "border-2 border-primary-light px-8 py-4 text-lg";

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const errorArray = [
    errors.name?.message,
    errors.phone?.message,
    errors.email?.message,
    errors.subject?.message,
  ].filter((msg) => msg !== undefined);
  const errorMessage = errorArray.join(", ");

  const { isLoading, mutate } = useMutation({
    mutationFn: updateFormData,
    onSuccess: () => toast.success("Sent Successfully."),
    onError: () => toast.error("Failed to send."),
  });

  function onSubmit(data) {
    mutate(data);
    reset();
  }

  return (
    <form
      className="mx-auto w-1/2 space-y-12 max-sm:w-full max-sm:px-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-rows-[1fr_1fr_2fr] gap-2">
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Name"
            className={styles}
            {...register("name", {
              required: { value: true, message: "name" },
            })}
          />
          <input
            type="number"
            placeholder="Phone"
            className={styles}
            {...register("phone", {
              required: {
                value: true,
                message: "phone",
              },
            })}
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className={styles}
          {...register("email", {
            required: { value: true, message: "email" },
          })}
        />
        <input
          type="text"
          placeholder="Subject"
          className={styles}
          {...register("subject", {
            required: {
              value: true,
              message: "subject",
            },
          })}
        />
      </div>
      {errorArray.length !== 0 && (
        <div className="text-xs text-red-600">
          <p>
            {`The ${errorMessage} ${errorArray.length === 1 ? "field is" : "fields are"} required.`}
          </p>
        </div>
      )}
      <div className="flex justify-center align-bottom">
        <ButtonSecondary theme="secondary" type="submit" disabled={isLoading}>
          Send
        </ButtonSecondary>
      </div>
    </form>
  );
}

export default Form;
