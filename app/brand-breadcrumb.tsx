'use client';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
export function BrandBreadcrumb({sector,sectorTitle,name}:{sector:string;sectorTitle:string;name:string}) {
  return <Breadcrumb className="brand-breadcrumb wrap"><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbLink href={`/categories/${sector}`}>{sectorTitle}</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>{name}</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>;
}
