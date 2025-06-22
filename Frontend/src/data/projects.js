// src/data/projects.js
import pegasusLogo from '@/assets/images/pegasus.png';


// Kita akan export data ini agar bisa di-import di file lain
export const projects = [
  {
    id: 1,
    slug: 'sistem-reservasi-restoran', // unik, tanpa spasi, untuk URL
    title: 'Sistem Reservasi Restoran',
    category: 'Web Development',
    categorySlug: 'web-dev',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    description: 'Membangun aplikasi web lengkap untuk sebuah restoran fiktif, memungkinkan pelanggan untuk melihat menu, melakukan reservasi meja secara online, dan memberikan ulasan. Dibuat dengan backend Laravel untuk mengelola data dan frontend Vue.js untuk pengalaman pengguna yang dinamis.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'CSS'],
    liveUrl: '#', // Ganti dengan link live demo jika ada
    repoUrl: '#', // Ganti dengan link repository github jika ada
  },
  {
    id: 2,
    slug: 'desain-ulang-aplikasi-mobile',
    title: 'Desain Ulang Aplikasi Mobile',
    category: 'UI/UX',
    categorySlug: 'ui-ux',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop',
    description: 'Studi kasus untuk merancang ulang antarmuka pengguna (UI) dan pengalaman pengguna (UX) dari sebuah aplikasi mobile populer. Fokus pada penyederhanaan alur pengguna, modernisasi tampilan visual, dan peningkatan aksesibilitas.',
    technologies: ['Figma', 'User Research', 'Prototyping'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 3,
    slug: 'logo-pegasus-minimalis',
    title: 'Logo Pegasus Minimalis',
    category: 'Desain Logo',
    categorySlug: 'logo-design',
     image: pegasusLogo, 
    description: 'Menciptakan identitas visual lengkap untuk brand kopi lokal Pegasus dengan desain logo minimalis, palet warna, tipografi, dan elemen kemasan. Tujuannya adalah menghadirkan citra modern yang tetap menonjolkan keaslian produk kopi Indonesia, ditampilkan melalui desain logo yang elegan dengan sentuhan burung Pegasus.',
    technologies: ['Adobe Illustrator', 'Branding', 'Packaging Design'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 4,
    slug: 'website-ecommerce-fashion',
    title: 'Website E-Commerce Fashion',
    category: 'Web Development',
    categorySlug: 'web-dev',
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop',
    description: 'Aplikasi E-Commerce yang dibuat dengan Vue.js untuk frontend dan sistem manajemen konten untuk mengelola produk. Fitur termasuk keranjang belanja, checkout, dan halaman detail produk.',
    technologies: ['Vue.js', 'Pinia', 'Vue Router'],
    liveUrl: '#',
    repoUrl: '#',
  }
];