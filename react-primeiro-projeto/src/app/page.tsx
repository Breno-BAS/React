import { Person } from "./components/Person";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>Algum outro texto</h3>

      <Person
        name = 'Elon Musk'
        avatar = 'https:// classic. exame. com/wp-content/uploads/2021/04/Elon-Musk.jpg'
        roles = {['Ceo da Tesla', 'Ceo da SpaceX']}
      />
      <Person
        name = 'Jeff Bezos'
        avatar = 'https://www.bloomberglinea.com/resizer/lYzExXPogs0LIafyJ5YsuaA0-4k=/800x0/filters:format(webp):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/XJIAZDYBVBFD5LL4NZNHRRIQLM.jpg'
        roles = {['Ceo da Amazon', 'Ceo da Blue Origin']}
      />
      <Person
        name = 'Pedro Ricardo'
        roles = {['Ceo da Porra toda', 'Ceo de Porra Nenhuma']}
      />
    </div>
    
  );
};

export default Page;