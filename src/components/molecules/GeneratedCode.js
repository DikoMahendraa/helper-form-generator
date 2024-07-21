import { Atom, Copy, RefreshCcw } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import ListReferences from "./ListReferences";
import Button from "../atoms/button";
import { generateFormCode } from "../../utils/generateFormCode";
import { useAtom } from "jotai";
import { integrationWith } from "../../pages/FormGenerator";

const GeneratedCode = ({ inputs }) => {
  const [copied, setCopied] = useState(false);
  const [_integrationWith, setIntegrationWith] = useAtom(integrationWith);

  useEffect(() => {
    Prism.highlightAll();
  }, [inputs.length, _integrationWith, setIntegrationWith]);

  const code = useCallback(() => {
    return generateFormCode({ inputs, validationLib: _integrationWith });
  }, [_integrationWith, inputs]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  const onIntegrationWith = useCallback(
    (type) => {
      setIntegrationWith(type);
    },
    [setIntegrationWith]
  );

  const buttonData = [
    {
      onclick: () => onIntegrationWith(""),
      text: "Default",
      icon: <RefreshCcw size={18} />,
    },
    {
      onclick: () => onIntegrationWith("zod"),
      text: "Zod Validation",
      image: "https://zod.dev/logo.svg",
    },
    {
      onclick: () => onIntegrationWith("yup"),
      text: "Yup Validation",
      image:
        "https://miro.medium.com/v2/resize:fit:1067/1*8pLiWUrglmnzfBYf1XJ4TA.jpeg",
    },
    {
      onclick: () => onIntegrationWith("zrhc"),
      text: "Zod + RHF",
      image:
        "https://pbs.twimg.com/profile_images/1373527896472489987/YjVZynHb_400x400.jpg",
    },
    {
      onclick: () => onIntegrationWith("yrhc"),
      text: "Yup + RHF",
      image:
        "https://pbs.twimg.com/profile_images/1373527896472489987/YjVZynHb_400x400.jpg",
    },
  ];

  const textButtonData = () => {
    switch (_integrationWith) {
      case "zod":
        return "Zod Validation";
      case "yup":
        return "Yup Validation";
      case "zrhc":
        return "Zod + RHF";
      case "yrhc":
        return "Yup + RHF";
      default:
        return "Default";
    }
  };

  return (
    <>
      <div className="w-full mt-12 p-4 bg-gray-800 text-white rounded shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Atom /> Generated React Code:{" "}
            <span className="uppercase">{_integrationWith}</span>
          </h3>
        </div>

        <div className="my-8">
          <h5 className="mb-4">Integration with</h5>
          <div className="flex flex-wrap gap-2">
            {buttonData.map((item) => {
              return (
                <Button
                  styles={
                    textButtonData().includes(item.text) ? "bg-cyan-600/50" : ""
                  }
                  key={item.text}
                  onclick={item.onclick}
                  text={item.text}
                  icon={item.icon && item.icon}
                  image={item.image && item.image}
                />
              );
            })}
          </div>
          <ListReferences />
        </div>

        <div className="relative">
          <div className="absolute right-0">
            <button
              className="px-4 py-2 flex lg:text-sm text-xs items-center gap-2 bg-cyan-500 text-white rounded"
              onClick={copyToClipboard}
            >
              <Copy size={14} />
              {copied ? (
                <span className="text-xs italic text-white">
                  copied successfully!
                </span>
              ) : (
                <span className="hidden lg:inline">Copy</span>
              )}
            </button>
          </div>
          <pre className="whitespace-pre-wrap p-4 bg-gray-900 rounded break-words">
            <code className="language-javascript !text-xs lg:!text-base">
              {code()}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default GeneratedCode;
