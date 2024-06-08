export interface IHeadingWithCountProps {
  count: number;
  title: string;
  spinner?: boolean;
}

export interface ISkeletonProps {
  styles: {
    readonly [key: string]: string;
  };
  count?: number;
}

export interface IProductAvailableProps {
  vendorCode: string;
  inStock: number;
}
