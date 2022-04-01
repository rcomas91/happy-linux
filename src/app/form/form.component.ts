import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  meses=[
    "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"
  ]
  resultado: string = "";
  descripcion:string="";
  imagen:string="";
  link:string="";
  constructor() { }

  ngOnInit(): void {
  }

  onChange(mes:any) {
   
    switch(mes){
      
case 'enero':this.resultado="Fedora";this.link="../../assets/fedora-logo.png"
this.descripcion="Fedora es conocido por tener actualizaciones frecuentes, a veces con semanas o meses de diferencia, integrando los últimos programas y funciones disponibles para los sistemas Linux. Esto hace que la distribución sea menos fiable para aquellos que prueban nuevos productos debido al corto ciclo entre versiones, y aumenta el riesgo de construcciones inestables. Sin embargo, es ideal para aquellos que quieren estar a la vanguardia del desarrollo de Linux."
break;
case 'febrero':this.resultado="Ubuntu";this.link="../../assets/ubuntu-logo.png"
this.descripcion="Ubuntu tiene varios “sabores” disponibles, siete para ser exactos, que vienen con sus propios programas, entornos de escritorio y características: MATE ofrece varias aplicaciones importantes, como Firefox, Thunderbird, LibreOffice, Rythmbox, Shotwell, VLC y Steam. Se basa en el entorno de escritorio MATE, que proporciona su propio conjunto de herramientas además de una presentación intuitiva y atractiva. Combina esto con la famosa facilidad de uso e instalación de Ubuntu, y tendrás un gran sistema operativo tanto si eres principiante como un entusiasta de Linux."
break;
case 'marzo':this.resultado="Open Suse";this.link="../../assets/Opensuse-logo.png"
break;
case 'abril':this.resultado="Kali Linux";this.link="../../assets/kali-logo.png"
this.descripcion="Kali Linux es una distribución de Linux basada en Debian, específicamente diseñada para temas de seguridad muy variados, como análisis de redes, ataques inalámbricos, análisis forenses y otros que más adelante citaremos. Contiene herramientas para llevar a cabo todas estas pruebas de seguridad y análisis. Kali Linux se encuentra entre las distribuciones de seguridad de Linux más usadas, ya que es una de las mejores, tanto para uso personal como profesional, proporcionando a los usuarios paquetes de herramientas como Foremost, Wireshark, Maltigo as-Aircrack-ng, Kismet y más. Algunas de estas herramientas seguro que te suenan bastante, sobre todo Wireshark, de la que tenemos un interesante artículo nuestro blog, hablando sobre la misma."

break;
case 'mayo':this.resultado="Mint";this.link="../../assets/mint-logo.png"
this.descripcion="Linux Mint es ahora la distribución líder de Linux, superando a Ubuntu y todas las demás distribuciones para convertirse en la principal competencia de Windows y MacOS. Cuando miras las características de Linux Mint, como la suite de productividad LibreOffice y la función de restauración de fotografías Tineshift, esa afirmación se hace fácil de creer. Esta distribución gratuita y de código abierto se instala rápida y fácilmente desde un USB o un DVD virgen, y ofrece soporte multimedia completo desde el primer momento. Linux Mint no requiere demasiados recursos, y es conservador acerca de las actualizaciones, lo que significa que hay pocas posibilidades de instalar una actualización defectuosa o inestable. Los usuarios de medios también pueden reproducir medios instantáneamente de CDs, MP3s, y videos gracias al mejor soporte de Linux para archivos de medios patentados"
break;
case 'junio':this.resultado="Red Hat";this.link="../../assets/redhat-logo.png"
this.descripcion="Red Hat Enterprise Linux es un sistema operativo Linux para empresas, el cual está certificado en cientos de nubes y con miles de proveedores. Proporciona una base sólida para todos los entornos y las herramientas necesarios para prestar servicios y ejecutar cargas de trabajo con mayor rapidez para cualquier aplicación. Además, no solo reduce los inconvenientes y los costos asociados a la implementación, sino que también agiliza la obtención de resultados para las cargas de trabajo más importantes de la empresa, lo cual permite que los equipos de desarrollo y operaciones generen innovaciones juntos en cualquier entorno."
break;
case 'julio':this.resultado="Solus";this.link="../../assets/solus-logo.png"
this.descripcion="Los usuarios creativos de Linux pueden obtener mucho usando Solus, ya sean animadores, diseñadores gráficos, editores, o que estén en otro campo de creación de contenido, ya que Solus tiene una variedad de usos. Los desarrolladores pueden escribir servicios de web de soporte o controladores y usar una gran cantidad de compiladores, editores, sistemas de control de versiones y lenguajes de programación, así como tecnologías de virtualización y contenedorización."
break;
case 'agosto':this.resultado=" Arch Linux";this.link="../../assets/arch-linux.png"
this.descripcion="Esta distribución prioriza la codificación limpia por sobre todo lo demás, lo que puede hacer que sea intimidante para usuarios nuevos de Linux. Sin embargo, Manjaro se basa en el marco de Arch Linux y es mucho más indulgente con los novatos. Esta distribución servirá para usuarios que desean un sistema libre sin elementos innecesarios, pero los principiantes pueden considerar otras opciones."
break;
case 'septiembre':this.resultado="Manjaro";this.link="../../assets/Manjaro-logo.png"
this.descripcion="Manjaro está basado en otra distribución de Linux llamada Arch, que está optimizada para usuarios avanzados familiarizados con el back-end de Linux.  Se centra en la facilidad de uso tanto para principiantes como para usuarios avanzados, sin eliminar todo lo bueno que hace que Arch sea excelente. Además, las características de Manjaro te permiten detectar automáticamente el hardware de tu sistema e instalar el software adecuado como si fuera una máquina basada en Windows."
break;
case 'octubre':this.resultado=" Gentoo";this.link="../../assets/gentoo-logo.png"
this.descripcion="Gentoo Linux es una distribución Linux orientada a usuarios con cierta experiencia en estos sistemas operativos, fue fundada por Daniel Robbins, basada en la inactiva distribución llamada Enoch Linux. En el año 2002, esta última pasó a denominarse Gentoo Linux. El nombre Gentoo proviene del nombre en inglés del pingüino papúa. Nótese que la mascota de Linux llamada Tux es un pingüino. "
break;
case 'noviembre':this.resultado=" Deepin OS";this.link="../../assets/depinOS.png"
this.descripcion="Deepin (estilizado como deepin) es un sistema operativo de software libre y código abierto. Es una distribución de Linux basada en Debian. Se ejecuta en computadores personales, servidores y máquinas virtuales, en arquitecturas x86-64 y ARM (soporte limitado). Está orientado al usuario promedio, con un fuerte enfoque en la facilidad de uso y en mejorar la experiencia del usuario. Está compuesto de múltiple software normalmente distribuido bajo una licencia libre o de código abierto.  "
break;
case 'diciembre':this.resultado=" Debian";this.link="../../assets/debian-logo.png"
this.descripcion="Debian es una de las distribuciones de Linux más antiguas, se lanzó por primera vez en 1996. Desde entonces, ha servido como marco para muchas otras distribuciones, como Ubuntu y Mint, que posteriormente han inspirado a muchas otras distribuciones. Debian es algo así como el “abuelo” de las distribuciones actuales. La versión moderna de Debian ofrece 59,000 versiones con diferentes entornos de escritorio integrados, aunque GNOME es la interfaz soportada principalmente."
break;
    }

  }

}
