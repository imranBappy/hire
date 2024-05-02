"use client";
import { Breadcrumb as AntBreadcrumb } from "antd";
import Link from "next/link";
const Breadcrumb = ({ items }) => {
  return (
    <AntBreadcrumb className=" !mb-4">
      {items.map((item, index) => {
        return (
          <AntBreadcrumb.Item key={index}>
            <Link href={item.href}>{item.name}</Link>
          </AntBreadcrumb.Item>
        );
      })}
    </AntBreadcrumb>
  );
};

export default Breadcrumb;
