interface MenuItem {
    id: number;
    title: string;
    class_name?: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
    menu_column?: {
        id: number;
        mega_title: string;
        mega_menus: {
            link: string;
            title: string;
        }[];
    }[]
}[];

const menu_data: MenuItem[] = [

    {
        id: 1,
        has_dropdown: false,
        title: "Find Your Home",
        link: "/Find_Your_Home",
        sub_menus: [

        ],
    },

    {
        id: 2,
        has_dropdown: false,
        title: "Sell Your Home",
        link: "/Sell_Your_Home",
        sub_menus: [
        ],
    },


    {
        id: 3,
        has_dropdown: false,
        title: "About Us",
        link: "/about_us",
        sub_menus: [
            { link: "/contact", title: "Contact Us" },
            { link: "/faq", title: "FAQ's" },

        ],
    },





    // {
    //     id: 4,
    //     has_dropdown: true,
    //     title: "Blog",
    //     link: "#",
    //     sub_menus: [
    //         { link: "/blog_01", title: "Blog Grid" },
    //         { link: "/blog_02", title: "Blog List" },
    //         { link: "/blog_03", title: "Blog 2 column" },
    //         { link: "/blog_details", title: "Blog Details" },
    //     ],
    // },
];
export default menu_data;
