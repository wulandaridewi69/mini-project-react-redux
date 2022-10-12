# Article App

<!-- PROJECT LOGO -->
<br/>
<div align="center">
<!--  mengarah ke repo  -->
  <a href="https://github.com/wulandaridewi69/mini-project-react-redux">
    <img src="https://github.com/wulandaridewi69/mini-project-react-redux/blob/develop/src/assets/cover.png">
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
| POST | /login | - | NO | Melakukan proses login user |

</details>  

<details>
<summary>🛍 &nbsp;Article</summary>
  
  <!---
  | Command | Description |
| --- | --- |
  --->
  
Pada Article ini user dapat melihat article. Selain itu User juga dapat membuat comment ruangan sendiri yang nantinya dapat ditampilkan pada detail artikel pada bagian feedback. 
  
| Feature Products | Endpoint | Param | Fungsi |
| --- | --- | --- | --- | --- |
| GET | /articles | page, title |  Mendapatkan informasi seluruh article |
| GET | /articles/:id | id |  Mendapatkan informasi article berdasarkan id-article |
| GET | /rooms | - |  Melakukan update comment berdasarkan id_article |
| POST | /articles/:id/comments/ | id |  Membuat comment pada section feedback berdasarkan id_room |
| DEL | /articles/:id/comments/:id | id |  Melakukan delete comment berdasarkan id_rooms |
| GET | /banners | -|  Menamplikan banner |

</details>


### Contact

[![GitHub Wanda](https://img.shields.io/badge/-Wanda-white?style=flat&logo=github&logoColor=black)](https://github.com/wulandaridewi69)
[![LinkedIn Wanda](https://img.shields.io/badge/-Wanda-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/dewi-wulandari-970590136/)



