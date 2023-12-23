import { useForm } from "react-hook-form";
import SubmitButton from "../atoms/submit.button";
import { addNode } from "../apis/apis";
import { useQueryClient, useMutation } from "react-query";

const AddNodeForum = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const queryClient = useQueryClient();

  const mutation = useMutation(addNode, {
    onSuccess: (data) => {
      if (data.status === "ok") {
        queryClient.invalidateQueries("data");
        reset();
      }
    },
  });

  const onSubmit = async (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="node" className="mb-1 text-xs">
            Enter name of the node:
          </label>
          <input
            type="text"
            id="node"
            {...register("node", {
              required: "Name of the node is required",
            })}
            className="border rounded p-2 text-xs"
          />
          {errors.node && (
            <p className="text-red-500 mt-1 text-xs">{errors.node.message}</p>
          )}
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

export default AddNodeForum;
