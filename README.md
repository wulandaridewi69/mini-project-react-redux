# Article App

<!-- PROJECT LOGO -->
<br/>
<div align="center">
<!--  mengarah ke repo  -->
  <a href="https://github.com/wulandaridewi69/mini-project-react-redux">
    <img src="https://github.com/wulandaridewi69/mini-project-react-redux/blob/develop/src/assets/cover.png" >
  </a>

<h3 align="center">Article</h3>

  <p align="center">
    Article Application
    <br />
    <a href="https://62d5368fd4406e5235558a46.mockapi.io/"><strong>» Open API »</strong></a>
    <br />
  </p>
</div>


### 🛠 &nbsp;Build App & Tools

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)&nbsp;
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)&nbsp; 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)&nbsp;
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)&nbsp;
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)&nbsp;
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)&nbsp;
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)&nbsp;
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white)&nbsp;
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)&nbsp;
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)&nbsp;
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)&nbsp;
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white);

## About Project
**Article App** merupakan projek dari PT Get Plus Indonesia, dimana pada app ini menampilkan jenis0jenis article. Fitur-fitur yang ada pada **Article App** sebagai berikut:

<div>
      <details>
<summary>🙎 Users</summary>
  
  <!---
  | Command | Description |
| --- | --- |
  --->
  
 Endpoint User terdapat fitur untuk membuat Login agar dapat mengakses berbagai artikel di Article App, 
 selain itu terdapat fitur Comment berfungsi untuk memberi feedback pada article yang dibaca serta dapat melakukan delete feedback.
 
<div>
  
| Feature User | Endpoint | Param | JWT Token | Fungsi |
| --- | --- | --- | --- | --- |
| POST | /signup  | - | NO | Melakukan proses registrasi user |
| POST | /login | - | NO | Melakukan proses login user |
| GET | /users | - | YES | Mendapatkan informasi daftar user terdaftar |
| PUT | /users | - | YES | Melakukan update profile user yang sedang login | 
| DEL | /users | - | YES | Menghapus user yang sedang login |

</details>  

<details>
<summary>🛍 &nbsp;Room</summary>
  
  <!---
  | Command | Description |
| --- | --- |
  --->
  
Pada Room ini user dapat melihat beberapa daftar ruangan dan detail ruangan yang disewakan. Selain itu User juga dapat membuat profile ruangan sendiri yang nantinya akan disewakan. Terdapat beberapa fitur tambahan pada **Room** ini, yaitu *facility* dan *categories* yang bertujuan untuk mengelompokkan ruangan dengan berdasarkan kategori dan menampikan fasilitas yang ada pada ruangan tersebut. Sehingga memudahkan User untuk menentukan pilihan ketika hendak menyewa ruangan.
  
| Feature Products | Endpoint | Param | JWT Token | Fungsi |
| --- | --- | --- | --- | --- |
| POST | /rooms  | - | YES | Membuat rooms profile baru |
| GET | /rooms | - | YES | Mendapatkan informasi seluruh product user yang sedang login |
| GET | /rooms/:id | id | NO | Mendapatkan informasi rooms berdasarkan id-rooms |
| PUT | /rooms | - | YES | Melakukan update profile informasi room |
| GET | /user/rooms | id | NO | Mendapatkan informasi rooms yang terlah dibuat oleh user. |
| DEL | /rooms/:id | id | YES | Melakukan delete rooms tertentu berdasarkan id rooms |

</details>


<details>
<summary>🛒 &nbsp;Rent</summary>
  
  <!---
  | Command | Description |
| --- | --- |
  --->
Cart merupakan fitur untuk menampung berbagai product yang akan dibeli oleh user, adapun fiturnya ada GET dimana user bisa melihat barang apa aja yang ada di dalam keranjang, ada fitur history dimana user bisa melihat jumlah product yang sudah dibayar.
  
| Feature cart | Endpoint | Param | JWT Token | Fungsi |
| --- | --- | --- | --- | --- |
| POST | /rents | - | YES | Melakukan sewa pada sebuah rooms |
| GET | /rents | - | YES | Mendapatkan informasi sewa yang telah dilakukan |

</details>

<details>
<summary>🗓&nbsp;Payments</summary>
  
  <!---
  | Command | Description |
| --- | --- |
  --->
Merupakan fitur untuk dimana user melakukan pembayaran sesuai sewa room yang dipilih. Mode pembayaran ini menggunakan payment gateway yang disediakan oleh xendit, payment_method yang digunakan pada MN-Room yaitu pembayaran melalui BANK BCA dan BNI. 
  
| Feature booking | Endpoint | Param | JWT Token | Fungsi |
| --- | --- | --- | --- | --- |
| GET | /payments | id | YES | Mendapatkan informasi pembayaran berdasarkan rent id |
| POST | /payments/status | - | NO | Membuat pembayaran sewa ruang |

</details>


<details>
<summary>📈&nbsp;ERD</summary>
<img src="./erd/ERD-MNroom.jpg">
</details>  

### Contact

[![GitHub Azis](https://img.shields.io/badge/-Azis-white?style=flat&logo=github&logoColor=black)](https://github.com/mohamadazisadnan)
[![LinkedIn Azis](https://img.shields.io/badge/-Azis-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/azisadnn/)

[![GitHub David](https://img.shields.io/badge/-David-white?style=flat&logo=github&logoColor=black)](https://github.com/davidwah)
[![LinkedIn David](https://img.shields.io/badge/-David-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/david-wahyu-pratomo/)

[![GitHub Mulya](https://img.shields.io/badge/-Mulya-white?style=flat&logo=github&logoColor=black)](https://github.com/mulyanurdin10)
[![LinkedIn Mulya](https://img.shields.io/badge/-Mulya-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/mulya-nurdin-473807246/)


# React-Redux Boilerplate

The Boilerplate to start React+Redux project with TypeScript in an easier and faster way. 

## Features

- React
- Redux
- TypeScript
- Tailwind
- MUI
