"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { addProduct } from "@/lib/actions/product.action";
import { addProductSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Dashboard() {
  const router = useRouter();
  const form = useForm<z.infer<typeof addProductSchema>>({
    resolver: zodResolver(addProductSchema),
  });

  async function onSubmit(values: z.infer<typeof addProductSchema>) {
    const {
      title,
      description,
      thumbnail,
      price,
      discountPrice,
      brand,
      stock,
      category,
    } = values;

    await addProduct({
      title,
      description,
      price: parseInt(price),
      discountPrice: parseInt(discountPrice),
      brand,
      stock: parseInt(stock),
      category,
      thumbnail,
    });

    router.push("/");
  }

  return (
    <Form {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <div className="flex w-full flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
              <div className=" grid  flex-1 auto-rows-max gap-4">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                  <Card x-chunk="dashboard-07-chunk-0 w-full">
                    <CardHeader>
                      <CardTitle>Product Details</CardTitle>
                      <CardDescription>Add Product</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 ">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Input placeholder="Description" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                              <Input placeholder="price" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="discountPrice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Discount Price</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="Discount Price"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="brand"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Brand</FormLabel>
                            <FormControl>
                              <Input placeholder="Brand" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="stock"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Stock</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="Stock"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="mobile">Mobile</SelectItem>
                                <SelectItem value="laptop">Laptop</SelectItem>
                                <SelectItem value="watch">Watch</SelectItem>
                                <SelectItem value="accessories">
                                  Accessories
                                </SelectItem>
                              </SelectContent>
                            </Select>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="thumbnail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Thumbnail</FormLabel>
                            <FormControl>
                              <Input placeholder="Thumbnail" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                </div>
                <div className=" flex gap-2 ">
                  <Button variant="outline" size="sm">
                    Discard
                  </Button>
                  <Button
                    disabled={form.formState.isSubmitting}
                    type="submit"
                    size="sm"
                  >
                    Save Product
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </form>
    </Form>
  );
}
