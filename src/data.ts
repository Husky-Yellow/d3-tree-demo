interface DataObject {
  name: string;
  children: { name: string; size: number }[];
}

export const generateData = ():DataObject => {
  const names: string[] = [
    "animate", "Easing", "FunctionSequence", "interpolate", "ArrayInterpolator",
    "ColorInterpolator", "DateInterpolator", "Interpolator", "MatrixInterpolator",
    "NumberInterpolator", "ObjectInterpolator", "PointInterpolator",
    "RectangleInterpolator", "ISchedulable", "Parallel", "Pause", "Scheduler",
    "Sequence", "Transition", "Transitioner", "TransitionEvent", "Tween"
  ];

  const getRandomName = (): string => {
    if (names.length === 0) {
      return '';
    }
    const randomIndex = Math.floor(Math.random() * names.length);
    return names.splice(randomIndex, 1)[0];
  };

  const generateChildren = (): { name: string; size: number }[] => {
    const children: { name: string; size: number }[] = [];
    const numChildren = Math.floor(Math.random() * 50) + 1;
    for (let i = 0; i < numChildren; i++) {
      const childName = getRandomName();
      const childSize = Math.floor(Math.random() * 10000) + 1000;
      children.push({ name: childName, size: childSize });
    }
    return children;
  };

  const generateObject = (): DataObject => {
    const name = getRandomName();
    const children = generateChildren();
    return { name, children };
  };

  return generateObject();
}