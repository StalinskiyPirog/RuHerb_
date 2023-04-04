import { Breadcrumb } from "flowbite-react";

interface BreadCrumbProps{
    category1: string;
    category2: string;
    category3: string;
    category4: string;
}

export function BreadCrumb({category1,category2,category3,category4}:BreadCrumbProps){

    return(
<Breadcrumb className="" aria-label="breadcrumb">
     
    {category1&&(<Breadcrumb.Item  href={"/search/"+category1}>
{category1}
</Breadcrumb.Item>)}
    {category2&&(<Breadcrumb.Item  href={"/search/"+category1+"/"+category2}>
{category2}
</Breadcrumb.Item>)}
    {category3&&(<Breadcrumb.Item  href={"/search/"+category1+"/"+category2+"/"+category3}>
{category3}
</Breadcrumb.Item>)}
    {category4&&(<Breadcrumb.Item  href={"/search/"+category1+"/"+category2+"/"+category3+"/"+category4}>
{category4}
</Breadcrumb.Item>)}
</Breadcrumb>

    );
};
