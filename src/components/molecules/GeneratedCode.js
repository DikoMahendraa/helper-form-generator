import { Atom, Copy, RefreshCcw } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import ListReferences from "./ListReferences";
import Button from "../atoms/button";
import { generateFormCode } from "../../utils/generateFormCode";

const GeneratedCode = ({ inputs }) => {
  const [copied, setCopied] = useState(false);
  const [validationLib, setValidationLib] = useState(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [inputs.length, validationLib]);

  console.log({ inputs });

  const code = generateFormCode({ inputs, validationLib });

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
      setValidationLib(type);
    },
    [setValidationLib]
  );

  return (
    <>
      <div className="w-full mt-12 p-4 bg-gray-800 text-white rounded shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Atom /> Generated React Code:
          </h3>
        </div>

        <div className="my-8">
          <h5 className="mb-4">Integration with</h5>
          <div className="flex flex-wrap gap-2">
            <Button
              onclick={() => onIntegrationWith("")}
              text="Default"
              icon={<RefreshCcw size={18} />}
            />
            <Button
              onclick={() => onIntegrationWith("zod")}
              text="Zod Validation"
              image="https://zod.dev/logo.svg"
            />
            <Button
              onclick={() => onIntegrationWith("yup")}
              text="Yup Validation"
              image="https://miro.medium.com/v2/resize:fit:1067/1*8pLiWUrglmnzfBYf1XJ4TA.jpeg"
            />
            <Button
              onclick={() => onIntegrationWith("zrhc")}
              text="Zod + RHF"
              image="https://pbs.twimg.com/profile_images/1373527896472489987/YjVZynHb_400x400.jpg"
            />
            <Button
              onclick={() => onIntegrationWith("yrhc")}
              text="Yup + RHF"
              image="https://pbs.twimg.com/profile_images/1373527896472489987/YjVZynHb_400x400.jpg"
            />
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
              {code}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default GeneratedCode;
