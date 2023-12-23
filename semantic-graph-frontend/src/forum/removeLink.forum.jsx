import { useForm } from "react-hook-form";
import SubmitButton from "../atoms/submit.button";
import { removeLink } from "../apis/apis";
import { useQueryClient, useMutation } from "react-query";
import { toast } from "sonner";

const RemoveLinkForum = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const queryClient = useQueryClient();

  const mutation = useMutation(removeLink, {
    onSuccess: (data) => {
      if (data.status === "ok") {
        queryClient.invalidateQueries("data");
        toast.success("Link removed successfully!");
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
            Enter the name of the existing node(1):
          </label>
          <input
            type="text"
            id="node1"
            {...register("node1", {
              required: "Name of the node is required",
            })}
            className="border rounded p-2 text-xs"
          />
          {errors.node1 && (
            <p className="text-red-500 mt-1 text-xs">{errors.node1.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="node" className="mb-1 text-xs">
            Enter the name of the existing node(2):
          </label>
          <input
            type="text"
            id="node2"
            {...register("node2", {
              required: "Name of the node is required",
            })}
            className="border rounded p-2 text-xs"
          />
          {errors.node2 && (
            <p className="text-red-500 mt-1 text-xs">{errors.node2.message}</p>
          )}
        </div>
        <SubmitButton />
      </form>
    </div>
  );
};

export default RemoveLinkForum;
