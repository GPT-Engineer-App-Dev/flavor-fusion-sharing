import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  ingredients: z.string().min(1, "Ingredients are required"),
  steps: z.string().min(1, "Preparation steps are required"),
  image: z.instanceof(FileList).refine((files) => files.length > 0, "Image is required"),
});

const RecipeSubmission = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    // Mock API call
    setTimeout(() => {
      toast.success("Recipe submitted successfully!");
      navigate("/recipes");
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Submit Your Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="title">Recipe Title</Label>
          <Input id="title" {...register("title")} />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
        </div>
        <div>
          <Label htmlFor="ingredients">Ingredients</Label>
          <Textarea id="ingredients" {...register("ingredients")} />
          {errors.ingredients && <p className="text-red-500">{errors.ingredients.message}</p>}
        </div>
        <div>
          <Label htmlFor="steps">Preparation Steps</Label>
          <Textarea id="steps" {...register("steps")} />
          {errors.steps && <p className="text-red-500">{errors.steps.message}</p>}
        </div>
        <div>
          <Label htmlFor="image">Recipe Image</Label>
          <Input id="image" type="file" {...register("image")} />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </div>
        <Button type="submit" variant="primary">Submit Recipe</Button>
      </form>
    </div>
  );
};

export default RecipeSubmission;