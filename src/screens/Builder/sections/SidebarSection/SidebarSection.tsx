import { AppWindowIcon, ImageIcon, Link2Icon, SquareIcon, TypeIcon } from "lucide-react";
import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "../../../../components/ui/toggle-group";

export const SidebarSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("layers");

  const pages = [
    { id: "home", name: "Home", icon: <AppWindowIcon className="w-4 h-4" /> },
  ];

  const layers = [
    {
      id: "body",
      name: "Body",
      icon: <AppWindowIcon className="w-4 h-4" />,
      sections: [
        {
          id: "section1",
          name: "Section [Layer name]",
          icon: <img className="w-4 h-4" alt="Section" src="/section.svg" />,
          divs: [
            {
              id: "div1",
              name: "Div [Layer name]",
              icon: <SquareIcon className="w-4 h-4" />,
              children: [
                {
                  id: "img1",
                  name: "Image [Layer name]",
                  icon: <ImageIcon className="w-4 h-4" />,
                },
                {
                  id: "text1",
                  name: "Text [Layer name]",
                  icon: <TypeIcon className="w-4 h-4" />,
                },
              ],
            },
            {
              id: "div2",
              name: "Div [Layer name]",
              icon: <SquareIcon className="w-4 h-4" />,
              children: [
                {
                  id: "img2",
                  name: "Image [Layer name]",
                  icon: <ImageIcon className="w-4 h-4" />,
                },
                {
                  id: "text2",
                  name: "Text [Layer name]",
                  icon: <TypeIcon className="w-4 h-4" />,
                },
              ],
            },
            {
              id: "div3",
              name: "Div [Layer name]",
              icon: <SquareIcon className="w-4 h-4" />,
              children: [
                {
                  id: "img3",
                  name: "Image [Layer name]",
                  icon: <ImageIcon className="w-4 h-4" />,
                },
                {
                  id: "text3",
                  name: "Text [Layer name]",
                  icon: <TypeIcon className="w-4 h-4" />,
                },
              ],
            },
          ],
        },
        {
          id: "section2",
          name: "Section [Layer name]",
          icon: <img className="w-4 h-4" alt="Section" src="/section.svg" />,
          divs: [
            {
              id: "div4",
              name: "Div [Layer name]",
              icon: <SquareIcon className="w-4 h-4" />,
              children: [
                {
                  id: "img4",
                  name: "Image [Layer name]",
                  icon: <ImageIcon className="w-4 h-4" />,
                },
                {
                  id: "text4",
                  name: "Text [Layer name]",
                  icon: <Link2Icon className="w-4 h-4" />,
                },
              ],
            },
            {
              id: "div5",
              name: "Div [Layer name]",
              icon: <SquareIcon className="w-4 h-4" />,
              children: [
                {
                  id: "img5",
                  name: "Image [Layer name]",
                  icon: <ImageIcon className="w-4 h-4" />,
                },
                {
                  id: "text5",
                  name: "Text [Layer name]",
                  icon: <TypeIcon className="w-4 h-4" />,
                },
              ],
            },
            {
              id: "div6",
              name: "Div [Layer name]",
              icon: <SquareIcon className="w-4 h-4" />,
              children: [
                {
                  id: "img6",
                  name: "Image [Layer name]",
                  icon: <ImageIcon className="w-4 h-4" />,
                },
                {
                  id: "text6",
                  name: "Text [Layer name]",
                  icon: <TypeIcon className="w-4 h-4" />,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full h-full gap-4 pt-2 pb-12 px-2">
      <div className="p-0 pt-2">
        <div className="flex gap-1">
          <Button
            variant={activeTab === "layers" ? "secondary" : "ghost"}
            className="flex-1 h-8"
            onClick={() => setActiveTab("layers")}
          >
            <span className={`text-xs ${activeTab === "layers" ? "text-zinc-950" : "text-zinc-500"}`}>
              Layers
            </span>
          </Button>
          <Button
            variant={activeTab === "assets" ? "secondary" : "ghost"}
            className="flex-1 h-8"
            onClick={() => setActiveTab("assets")}
          >
            <span className={`text-xs ${activeTab === "assets" ? "text-zinc-950" : "text-zinc-500"}`}>
              Assets
            </span>
          </Button>
          <Button
            variant={activeTab === "ai" ? "secondary" : "ghost"}
            className="flex-1 h-8"
            onClick={() => setActiveTab("ai")}
          >
            <span className={`text-xs ${activeTab === "ai" ? "text-zinc-950" : "text-zinc-500"}`}>
              Ai
            </span>
          </Button>
        </div>

        <div className="mt-4 font-text-xs-leading-4-semibold text-xs text-black">Pages</div>

        <div className="flex items-center gap-2 py-1 mt-1">
          <AppWindowIcon className="w-4 h-4" />
          <span className="font-text-xs-leading-4-medium text-xs text-black">Home</span>
        </div>

        <Separator className="my-4" />

        <div className="font-text-xs-leading-4-semibold text-xs text-black">Layers</div>

        <div className="flex flex-col gap-3 mt-4">
          {layers.map((layer) => (
            <Accordion key={layer.id} type="multiple" className="w-full" defaultValue={[layer.id]}>
              <AccordionItem value={layer.id} className="border-none">
                <AccordionTrigger className="py-1 px-0 hover:no-underline">
                  <div className="flex items-center gap-2">
                    {layer.icon}
                    <span className="font-text-xs-leading-4-medium text-xs text-black">{layer.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-0">
                  {layer.sections.map((section) => (
                    <Accordion key={section.id} type="multiple" className="w-full" defaultValue={[section.id]}>
                      <AccordionItem value={section.id} className="border-none">
                        <AccordionTrigger className="py-1 pl-6 pr-0 hover:no-underline">
                          <div className="flex items-center gap-2">
                            {section.icon}
                            <span className="font-text-xs-leading-4-medium text-xs text-black">{section.name}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-0 pb-0">
                          {section.divs.map((div) => (
                            <Accordion key={div.id} type="multiple" className="w-full" defaultValue={[div.id]}>
                              <AccordionItem value={div.id} className="border-none">
                                <AccordionTrigger className="py-1 pl-12 pr-0 hover:no-underline">
                                  <div className="flex items-center gap-2">
                                    {div.icon}
                                    <span className="font-text-xs-leading-4-medium text-xs text-black">{div.name}</span>
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent className="pt-0 pb-0">
                                  {div.children.map((child) => (
                                    <div key={child.id} className="flex items-center gap-2 py-1 pl-24 pr-0">
                                      {child.icon}
                                      <span className="font-text-xs-leading-4-medium text-xs text-black">
                                        {child.name}
                                      </span>
                                    </div>
                                  ))}
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};