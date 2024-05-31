import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contactus() {
  return (
    <Card className="w-full max-w-2xl mx-auto mt-10 mb-10">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          We&apos;d love to hear from you. Fill out the form below and
          we&apos;ll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium" htmlFor="first-name">
                First Name
              </Label>
              <Input
                className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:focus:border-primary"
                id="first-name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium" htmlFor="last-name">
                Last Name
              </Label>
              <Input
                className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:focus:border-primary"
                id="last-name"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium" htmlFor="email">
              Email
            </Label>
            <Input
              className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:focus:border-primary"
              id="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium" htmlFor="message">
              Message
            </Label>
            <Textarea
              className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:focus:border-primary"
              id="message"
              placeholder="Enter your message"
            />
          </div>
          <Button
            className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-primary dark:hover:bg-primary/90 dark:focus:ring-primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
