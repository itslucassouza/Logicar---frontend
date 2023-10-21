const sidebarStructure = [
    {
      id: "dashboard",
      title: "Dashboard",
      name: "dasbor",
      parent: true,
      icon: "dasbor",
      link: "/dashboard"
    },

    {
      id: "transaksi",
      title: "Visão geral",
      name: "transaksi",
      parent: true,
      icon: "transaksi",
      child: [
        {
          id: "rfq",
          title: "Carros cadastrados",
          name: "transaksi.rfq",
          link: "/cars",
          icon: "dot"
        },
        // {
        //   id: "quotation",
        //   title: "Vagas Disponiveis",
        //   name: "transaksi.quotation",
        //   link: "/dashboard/quotation",
        //   icon: "dot"
        // },
        // {
        //   id: "purchase-request",
        //   title: "Caixa",
        //   name: "transaksi.pr",
        //   link: "/balance",
        //   icon: "dot"
        // },
      ]
    },
    {
      id: "exit",
      title: "Sair",
      name: "sair",
      parent: true,
      icon: "sair",
      link: "/"
    },
  ];
  
  export { sidebarStructure };
  