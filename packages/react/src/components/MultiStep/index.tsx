import { Label, MultiStepContainer, Step, Steps } from "./styles";

export type MultiStepProps = {
  size: number;
  currentStep?: number;
};

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      <Steps
        css={{
          "--steps-size": size,
        }}
      >
        {Array.from({ length: size }, (_, step) => (
          <Step key={step + 1} active={currentStep >= step + 1} />
        ))}
      </Steps>
    </MultiStepContainer>
  );
}
MultiStep.displayName = "MultiStep";
