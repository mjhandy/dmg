declare module 'bootstrap/js/src/dropdown.js' {
  export default class Dropdown {
    constructor(element: Element);
    dispose(): void;
  }
}

declare module 'bootstrap/js/src/collapse.js' {
  export default class Collapse {
    constructor(element: Element, options?: { toggle?: boolean });
    hide(): void;
    dispose(): void;
  }
}

declare module 'bootstrap/js/src/carousel.js' {
  export default class Carousel {
    constructor(element: Element);
    dispose(): void;
  }
}
