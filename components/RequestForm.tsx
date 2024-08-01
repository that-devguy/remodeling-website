"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import RequestSchema from "@/schema/index";
import { Label } from "@/components/ui/label";

export default function RequestForm() {
  const form = useForm<z.infer<typeof RequestSchema>>({
    resolver: zodResolver(RequestSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      preferredMethodOfCommunication: "Phone Call",
      projectAddress: "",
      typeOfProject: "",
      preferredCallbackTime: "Morning",
      projectDescription: "",
      budgetRange: "",
      howDidYouHearAboutUs: "",
    },
  });

  function onSubmit(values: z.infer<typeof RequestSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 text-[16px]"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@example.com" inputMode="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="(123) 456-7890" inputMode="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Main St, Anytown, USA" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preferredMethodOfCommunication"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Method of Communication</FormLabel>
              <FormControl>
                <RadioGroup
                  defaultValue="Phone Call"
                  {...field}
                  onValueChange={field.onChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Phone Call" id="phone-call" />
                    <Label htmlFor="phone-call">Phone Call</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Text" id="text" />
                    <Label htmlFor="text">Text</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Email" id="email" />
                    <Label htmlFor="email">Email</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preferredCallbackTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Best Time to Reach You</FormLabel>
              <FormControl>
                <RadioGroup
                  defaultValue="Morning"
                  onValueChange={field.onChange}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Morning" id="morning" />
                    <Label htmlFor="morning">Morning</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Afternoon" id="afternoon" />
                    <Label htmlFor="afternoon">Afternoon</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Evening" id="evening" />
                    <Label htmlFor="evening">Evening</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="typeOfProject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Project</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Kitchen Remodel">
                    Kitchen Remodel
                  </SelectItem>
                  <SelectItem value="Bathroom Renovation">
                    Bathroom Renovation
                  </SelectItem>
                  <SelectItem value="Floor Installation">
                    Floor Installation
                  </SelectItem>
                  <SelectItem value="Deck Construction">
                    Deck Construction
                  </SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budgetRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated Budget Range</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Below $10,000">Below $10,000</SelectItem>
                  <SelectItem value="$10,000 - $20,000">
                    $10,000 - $20,000
                  </SelectItem>
                  <SelectItem value="$20,000 - $50,000">
                    $20,000 - $50,000
                  </SelectItem>
                  <SelectItem value="Above $50,000">Above $50,000</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brief Description of Your Project</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your project in a few sentences"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="howDidYouHearAboutUs"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How Did You Hear About Us?</FormLabel>

              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Internet Search">
                    Internet Search
                  </SelectItem>
                  <SelectItem value="Social Media">Social Media</SelectItem>
                  <SelectItem value="Referral">Referral</SelectItem>
                  <SelectItem value="Advertisement">Advertisement</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        /> */}
        <div className="col-span-1 md:col-span-2 mt-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
