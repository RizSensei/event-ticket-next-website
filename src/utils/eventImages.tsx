export const RandomImage = (index: number) => {
    const imageUrls = [
      "https://cdn.ticketsanjal.com/images/2024/09/24/064950-flyer.png",
      "https://cdn.ticketsanjal.com/images/2024/08/12/124147-MADHYAPUR_MUSIC_FEST_FINAL1%20(1).jpg",
      "https://cdn.ticketsanjal.com/images/2024/09/16/105420-Dashain%20Night.jpg",
      "https://cdn.ticketsanjal.com/images/2024/07/01/042945-WhatsApp%20Image%202024-07-01%20at%2010.14.02%20PM.jpeg",
      "https://cdn.ticketsanjal.com/images/2024/06/09/052110-CLASH%20OF%20DANCERS%20(1).png",
      "https://cdn.ticketsanjal.com/images/2024/05/27/082938-Mid-Bhaktapur%20Music%20Fest%20(3).png",
      "https://cdn.ticketsanjal.com/images/2023/11/28/094549-Kaal%20.png"
    ];
    const randomIndex = Math.floor(
      (Math.random() * index * Math.floor(Math.random() * 100)) % imageUrls.length
    );
    return imageUrls[randomIndex];
  };