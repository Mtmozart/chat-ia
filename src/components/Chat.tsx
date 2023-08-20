"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Chat ia</CardTitle>
        <CardDescription>Using Vercel SDK to create chat bot</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {messages.map((message) => {
          return (
            <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
              {message.role === "user" && (
                <Avatar>
                  <AvatarFallback>Df</AvatarFallback>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/108758897?v=4" />
                </Avatar>
              )}
              {message.role === "assistant" && (
                <Avatar>
                  <AvatarFallback>Df</AvatarFallback>
                  <AvatarImage src="https://androidfinal.com.br/wp-content/uploads/2023/04/Quem-deve-ser-escalado-para-o-filme-do-Quarteto-Fantastico.jpg.webp" />
                </Avatar>
              )}

              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                  {message.role === "user" ? "User" : "Reed Rirchads"}
                </span>
                {message.content}
              </p>
            </div>
          );
        })}
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="space-x-2 w-full flex">
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          ></Input>
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
