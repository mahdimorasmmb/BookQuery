import { useForm } from "react-hook-form";
import { Box, Button } from "rebass/styled-components";
import { Label, Input } from "@rebass/forms";
import { ThreeCircles } from "react-loader-spinner";

export const BookForm = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor="title"> Title</Label>
        <Input {...register('title')} id="title"  type="text" />
      </Box>
      <Box sx={{ marginBottom: 3 }}>
        <Label htmlFor="author"> Author</Label>
        <Input {...register('author')} id="author" type="text" />
      </Box>
      <Button>
        {isLoading ? <ThreeCircles color="#fff" height={10} /> : "Submit"}
      </Button>
    </form>
  );
};
