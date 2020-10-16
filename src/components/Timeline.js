export default function Timeline() {
  const items = [
    {
      title: "Front-End Developer",
      subtitle: "FINGO Software House",
      date: "III 2017 - X 2020",
      description: "description lolem lolem"
    },
    {
      title: "Front-End Developer",
      subtitle: "RekinySukcesu.pl",
      date: "XII 2015 - II 2017",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies massa est, ac gravida tellus iaculis et. Duis consequat gravida sollicitudin. Donec et ligula at sem sollicitudin viverra. Maecenas in orci libero. Maecenas convallis nisl nec facilisis ullamcorper. Nam elementum ipsum maximus consectetur accumsan. Maecenas nibh mi, auctor a molestie eu, rhoncus ut lacus. Duis sollicitudin purus lectus, id dapibus diam semper sed."
    },
    {
      title: "Junior .NET Developer",
      subtitle: "Krajowy Rejestr Długów Biuro Informacji Gospodarczej SA",
      date: "VII 2014 - VI 2015",
      description: "description lolem lolem"
    }
  ];

  return (
    <div className="timeline">
      {items.map((item, idx) => (
        <div className="timeline-item">
          <h3>{item.title}</h3>
          <h4>{item.subtitle}</h4>
          <div>{item.date}</div>
          <div dangerouslySetInnerHTML={{__html: item.description}} />
        </div>
      ))}
    </div>
  )
}
