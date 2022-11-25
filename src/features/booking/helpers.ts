export const getMaxStep = (maxStep?: number, currentStep?: number) => {
  let max = 0;
  if (maxStep !== undefined && currentStep !== undefined && maxStep < currentStep) {
    max = currentStep;
  } else {
    max = maxStep || 0;
  }
  return max;
};
