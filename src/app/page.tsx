import Image from "next/image";
import { ProfileForm } from "./coponents/form";
import Nav from "./coponents/nav";
import Navbar from "./coponents/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader } from "@/components/ui/card";
import Foter from "./coponents/Foter";

export default function Home() {
  return (
    <div className="w-screen">
      <Navbar />
      <div
        className="-mt-20"
        style={{
          backgroundImage: `url(${"/bg1.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 65%",
        }}
      >
        <div className="bg-slate-300/40 w-full h-full">
          <div className="flex justify-center text-3xl w-[80%] pt-52 flex-col font-semibold italic leading-relaxed">
            Welcome to the rubber revolution at{" "}
            <span className="text-[#3D5CC2] font-bold italic w-screen">
              PPS Industries.
            </span>
          </div>
        </div>
      </div>
      <div className="m-7">
        <span className="text-lg font-semibold ">Our Products</span>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-4">
            <AccordionTrigger>Marine Industry</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Fins</li>
                <li>Oxygen tank adapter snorkling mouthpiece.</li>
                <li>Mounting Isolator Kit</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>Fire Industry</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc">
                <li>Rubber Truck Camper Leveling Jack Pads</li>
                <li>Heavy Duty Industrial Rubber Wheel Chock</li>
                <li>Headlamp Rubber belt</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Automobile Industry</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Custom O-Rings</li>
                <li>Closed Loop Timing Belt Pulleys</li>
                <li>Jack Rubber Pad</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Mechanical Industry</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Rubber Drive Coupling</li>
                <li>Natural Rbber Sponge Gaskets</li>
                <li>Diaphrams</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Card className="max-w-screen-sm m-3 p-5">
        <CardHeader className="text-center font-semibold">
          Submit Your Query
        </CardHeader>
        <ProfileForm />
      </Card>
      <Foter />
    </div>
  );
}
