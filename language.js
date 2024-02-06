document.addEventListener('DOMContentLoaded', function() {
  const langEl = document.querySelector('.langWrap');
  const links = document.querySelectorAll('.langWrap a');
  const navbarLinks = document.querySelectorAll('.navbar a');
  const mainTitleEl = document.querySelector('.main-title');
  const paragraphElements = document.querySelectorAll("p");
  const h3Element = document.querySelector("h3");
  const h4Elements = document.querySelectorAll("h4");
  const heading2Elements = document.querySelectorAll('.heading-2');
  const heading5Elements = document.querySelectorAll('.heading-5');
  const heading6Elements = document.querySelectorAll('.heading-6');
  const headingElements = document.querySelectorAll('.heading');
  const heading3Elements = document.querySelectorAll('.heading-3');
  const mobileNavbarLinks = document.querySelectorAll('.mobile-nav a');
  const footerLinks = document.querySelectorAll('.footer a');

  links.forEach(link => {
    if(link.getAttribute('language') === 'english') {
      link.classList.add('active');
    }
});

  links.forEach(link => {
    link.addEventListener('click', () => {
      langEl.querySelector('.active').classList.remove('active');
      link.classList.add('active');

      const attr = link.getAttribute('language');

      mainTitleEl.textContent = data[attr]['main-title'];
      paragraphElements[0].textContent = data[attr]['p'][0];
      paragraphElements[1].textContent = data[attr]['p'][1];
      paragraphElements[2].textContent = data[attr]['p'][2];
      paragraphElements[3].textContent = data[attr]['p'][3];
      paragraphElements[4].textContent = data[attr]['p'][4];
      paragraphElements[5].textContent = data[attr]['p'][5];
      paragraphElements[6].textContent = data[attr]['p'][6];
      paragraphElements[7].textContent = data[attr]['p'][7];
      paragraphElements[8].textContent = data[attr]['p'][8];
      paragraphElements[9].textContent = data[attr]['p'][9];
      paragraphElements[10].textContent = data[attr]['p'][10];
      paragraphElements[11].textContent = data[attr]['p'][11];
      paragraphElements[12].textContent = data[attr]['p'][12];
      paragraphElements[13].textContent = data[attr]['p'][13];
      paragraphElements[14].textContent = data[attr]['p'][14];
      paragraphElements[15].textContent = data[attr]['p'][15];
      paragraphElements[16].textContent = data[attr]['p'][16];
      paragraphElements[17].textContent = data[attr]['p'][17];
      paragraphElements[18].textContent = data[attr]['p'][18];
      paragraphElements[19].textContent = data[attr]['p'][19];
      paragraphElements[20].textContent = data[attr]['p'][20];
      h3Element.textContent = data[attr]['h3'];
      
      for(let i = 0; i < h4Elements.length; i++) {
      h4Elements[i].textContent = data[attr]['h4'][i];}
      
      heading2Elements.forEach((existingElement, index) => {
        existingElement.textContent = data[attr]['heading-2'][index];
      });

      heading5Elements.forEach((existingElement, index) => {
        existingElement.textContent = data[attr]['heading-5'][index];
      });

      heading6Elements.forEach((existingElement, index) => {
        existingElement.textContent = data[attr]['heading-6'][index];
      });

      headingElements.forEach((existingElement, index) => {
        existingElement.textContent = data[attr]['heading'][index];
      });

      heading3Elements.forEach((existingElement, index) => {
        existingElement.textContent = data[attr]['heading-3'][index];
      });

      navbarLinks.forEach(navbarLink => {
        const originalText = navbarLink.getAttribute('data-original-text');
        const translation = data[attr][originalText.trim().toLowerCase()];
        if (translation) {
          navbarLink.textContent = translation;
          navbarLink.href = '#' + originalText;
        }
      });
      mobileNavbarLinks.forEach(mobileNavbarLink => {
        const originalText = mobileNavbarLink.getAttribute('data-original-text');
        const translation = data[attr][originalText.trim().toLowerCase()];
        if (translation) {
          mobileNavbarLink.textContent = translation;
          mobileNavbarLink.href = '#' + originalText;
        }
      });

      footerLinks.forEach(footerLink => {
        const originalText = footerLink.getAttribute('data-original-text');
        const translation = data[attr][originalText.trim().toLowerCase()];
        if (translation) {
          footerLink.textContent = translation;
          footerLink.href = '#' + originalText;
        }
      });
    });
  });



 
  var data = {
    russian: {
      "home":"Домой",
      "products": "Продукты",
      "about": "О нас",
      "team": "Контакты",
      'jobs': "Pаботы",
      "home":"Домой",
      "products": "Продукты",
      "about": "О нас",
      "team": "Контакты",
      'jobs': "Pаботы",
      "main-title": "ДОБРО ПОЖАЛОВАТЬ",
      "p": [
        "Дистрибьютор широкого профиля. Обладая логистическими возможностями, мы продвинем ваш бренд.",
        "ООО «ОПТИМУС ТРЭЙД» уделяет особое внимание построению финансово прозрачной структуры, развитию обширной сети собственных розничных магазинов на территории Республики Беларусь, благодаря которой сможет обеспечить высококачественное сервисное и логистическое обслуживание в каждом регионе.",
        "Топ-менеджмент компании работает на этом рынке более 10 лет и имеет колоссальный опыт вывода продукта на рынок.",
        "Организуем систему продаж и логистики. Естественно, всего этого мы не смогли бы добиться без поддержки производителя, его заинтересованности и уверенности в системном подходе к продажам.",
        "Мы уверены, что пришло время применить индивидуальный подход к меняющейся тенденции продаж и представления продукции, изменившимся требованиям владельца бренда.",
        "ООО «ОПТИМУС ТРЭЙД» уделяет oсoбoe внимание построению финансово прозрачной структуры, развитию обширной сети собственных розничных магазинов в Республике Беларусь, с помощью которых сможет обеспечить качественный сервис и логистику в каждом регионе. У нас есть ключевые факторы в финансировании, маркетинге и активных продажах электроники и бытовой техники ведущих брендов (Apple, Realme, Anker, Philips, Bosch, Braun)",
        "Отдел продаж",
        "+375 44 567-04-88",
        "+375 29 555-55-55",
        "По вопросам приобретения товара по безналичному расчету обращайтесь в отдел продаж.",
        "sales@optimustrade.by",
        "Сотрудничество",
        "info@optimustrade.by",
        "Минск, Беларусь, проспект Победителей 103, офис 1104, 220020.",
        "Собственный склад и система кросс-докинга.",
        "Широкий круг партнеров во всех каналах продаж.",
        "Качественное и оперативное планирование поставок через систему «одного окна».",
        "Проведение совместных маркетинговых мероприятий.",
        "Были сформированы профессиональные команды продаж. Внедрена система обучения торгового персонала и менеджмента.",
        "Наша финансовая мощь и технологии позволяют нам с уверенностью смотреть в будущее. Мы готовы осваивать как новые рынки, так и новые группы товаров. Мы идем в ногу с тенденциями рынка и понимаем потребности поставщиков. Мы доказали это годами стабильной работы и развития.",
        "Высокий уровень дистрибуции по всем каналам сбыта на всех обслуживаемых территориях. Огромный опыт проведения промо- и трейд-маркетинговых мероприятий."
      ],
      "heading-2":[
      "Продажи",
      "Наша сила",
      "Дистрибуция"
      ],
      "heading-5":[ 
        "Cтруктура"
      ],
      "heading-6":[ 
        "Группа компаний"
      ],
      "heading":[ 
        "Связаться с нами",
        "Социальные ссылки",
        "Напишите нам"
      ],
      "heading-3":[ 
        "Наши контакты",
        "Как найти нас"
      ],
      "h3": "О HAC",
      "h4": [
        "ООО «ОПТИМУС ТРЭЙД» - дистрибьютор широкого профиля, который имеет квалифицированный персонал сотрудников, работающих с ключевыми сетями в Республике Беларусь, такими как: MTS, Triovist, Electrisila, Ostrov Chistoty, Gadget Trade и другими. У нас есть возможность продвигать ваш бренд не только в Республике Беларусь, но и в других странах СНГ. Мы имеем ключевые факторы в финансировании, маркетинге и активных продажах электроники и бытовой техники ведущих брендов (Apple, Realme, Anker, Philips, Bosch, Braun) в Республике Беларусь. У нас есть все логистические возможности и полная поддержка гарантий. Нашей силой является профессионализм и партнерство с производителями. Наша финансовая мощность и технологии позволяют нам смотреть в будущее с уверенностью. Мы готовы развивать как новые рынки, так и новые группы товаров. Мы следуем за тенденциями рынка и понимаем потребности поставщиков. Мы доказали это через годы стабильной работы и развития.",
        "Огромный опыт проведения промо- и трейд-маркетинговых мероприятий.",
      ],
    },
    english: {
      "home":"Home",
      "products": "Products",
      "about": "About Us",
      "team": "Contacts",
      'jobs': "Works",
      "home":"Home",
      "products": "Products",
      "about": "About Us",
      "team": "Contacts",
      'jobs': "Works",
    "main-title": "WELCOME",
    "p": [
      "A distributor of a wide profile. Having logistics capabilities we'll promote your brand",
       "OPTIMUS TRADE LLC pays special attention to building a financially transparent structure, development an extensive network of its own retail stores in the Republic of Belarus, with the help of which it will be able to provide high-quality service and logistics in each region.",
       "The top management of the company has been working in this market for more than 10 years and has tremendous experience in bringing the product to the market",
       "We organize the sales and logistics system. Naturally, we couldn't achieve all this without the support of the manufacturer, his interest and confidence in the systemic sales approach.",
       "We are sure that the time has come to apply an individual approach to the changing trend of sales and product representation, the changed requirements of the brand holder.",
       "OPTIMUS TRADE LLC pays special attention to building a financially transparent structure, development an extensive network of its own retail stores in the Republic of Belarus, with the help of which it will be able to provide high-quality service and logistics in each region. We have key factors in financing, marketing and active sales of electronics and household appliances of top brands (Apple, Realme, Anker, Philips, Bosch, Braun)",
       "Sales Department",
       "+375 44 567-04-88",
       "+375 29 555-55-55",
       "For questions regarding the purchase of goods by bank transfer, please contact the sales department.",
       "sales@optimustrade.by",
       "Cooperation",
       "info@optimustrade.by",
       "Pobediteley avenue, 103, office 1104, 220020, Minsk, Republic of Belarus.",
       "In-house warehousing and cross-docking system.",
       "A wide range of partners in all sales channels.",
       "Quality and efficient planning of deliveries through a one-stop-shop system.",
       "Conducting joint marketing activities.",
       "Professional sales teams have been formed. A system of training for sales personnel and management has been introduced.",
       "Our financial strength and technology allow us to look to the future with confidence. We are ready to develop both new markets and new groups of goods. We are in line with market trends and understand the needs of suppliers. We have proven this through years of stable work and development.",
       "High level of distribution in all distribution channels in all territories served. Vast experience in conducting promo and trade marketing events.",
      ],
    "heading-2": [ 
    "Sales",
    "Our Strength",
    "Distribution"
    ],
    "heading-5":[ 
      "Structure"
    ],
    "heading-6":[ 
      "Group Companies"
    ],
    "heading":[ 
      "Contact Us",
      "Social Links",
      "Write To Us"
    ],
    "heading-3":[ 
      "Our Contacts",
      "How to find Us"
    ],
    "h3": "About US",
    "h4": [
      "OPTIMUS TRADE LLC is a distributor of a wide profile, has a qualified staff of employees who work with key networks in the Republic of Belarus such as: MTS, Triovist, Electrisila, Ostrov Chistoty, Gadget Trade and others. We have the opportunity to promote your brand not only in the Republic of Belarus, but also in other CIS countries. We have key factors in financing, marketing and active sales of electronics and household appliances of top brands (Apple, Realme, Anker, Philips, Bosch, Braun) in the Republic of Belarus. We have all the logistics capabilities and full warranty support. Our strength is professionalism and partnership with manufacturers. Our financial strength and technology allow us to look to the future with confidence. We are ready to develop both new markets and new groups of goods. We are in line with market trends and understand the needs of suppliers. We have proven this through years of stable work and development.",
      "Vast experience in conducting promo and trade marketing events.",
    ],
    }
  };
});