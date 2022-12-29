<details>
<summary>로그인 디자인</summary>
<img style="max-width: 100%; height: auto;" src="https://user-images.githubusercontent.com/54767632/209975619-8b6fa303-4e39-4131-9b03-c096e46ad3c1.gif" >
</details>

<details>
<summary>로그인 폼</summary>
<img style="max-width: 100%; height: auto;" src="https://user-images.githubusercontent.com/54767632/209975626-684a1ac2-eb98-49c2-87be-e7e9df56ddf9.gif" >
</details>

<details>
<summary>인트로 페이지(인터랙션)</summary>
<img style="max-width: 100%; height: auto;" src="https://drive.google.com/uc?export=view&id=1j7xPCubR3SVJcoolEirX98dU7ccVFsJG" >
</details>

<details>
<summary>지도 활용</summary>
<img style="max-width: 100%; height: auto;" src="https://drive.google.com/uc?export=view&id=12aX2eQqbcdxOPx7ut2C9szvjIFmwlXo1" >
</details>

<details>
<summary>Source Tree</summary>

├── App.tsx
├── Components
│   └── Commons
│   ├── Dialog
│   │   └── index.tsx
│   ├── Editor
│   │   ├── Atom
│   │   │   └── index.tsx
│   │   └── index.tsx
│   ├── ErrorPage
│   │   ├── 404.svg
│   │   ├── index.tsx
│   │   ├── magnifyingGlass.png
│   │   └── styled.ts
│   ├── Footer
│   │   ├── footerLogo.svg
│   │   ├── index.tsx
│   │   └── styled.ts
│   ├── Header
│   │   ├── arrowdown.svg
│   │   ├── index.tsx
│   │   ├── sampleAvatar.png
│   │   ├── searchicon.svg
│   │   └── styled.ts
│   ├── Input
│   │   └── index.tsx
│   └── SelectBox
│   └── index.tsx
├── Pages
│   ├── Edit
│   │   ├── Atoms
│   │   │   └── index.tsx
│   │   ├── Components
│   │   │   ├── Default
│   │   │   │   ├── index.tsx
│   │   │   │   └── styled.ts
│   │   │   ├── Default2
│   │   │   │   ├── index.tsx
│   │   │   │   └── styled.ts
│   │   │   ├── EditName
│   │   │   │   ├── index.tsx
│   │   │   │   ├── index2.tsx
│   │   │   │   └── styled.ts
│   │   │   ├── EditPw
│   │   │   │   ├── index.tsx
│   │   │   │   ├── index2.tsx
│   │   │   │   └── styled.ts
│   │   │   ├── HelperText
│   │   │   │   └── index.tsx
│   │   │   └── Tooltip
│   │   │   ├── edit.svg
│   │   │   └── tooltip.tsx
│   │   ├── Page
│   │   │   ├── index.tsx
│   │   │   └── styled.ts
│   │   ├── Utils
│   │   │   └── index.tsx
│   │   └── assets
│   │   └── defaultProfile.svg
│   ├── Home
│   │   ├── Components
│   │   │   ├── Cube
│   │   │   │   ├── index.tsx
│   │   │   │   └── styled.tsx
│   │   │   └── Spinner
│   │   │   └── index.tsx
│   │   ├── Page
│   │   │   ├── index.tsx
│   │   │   └── styled.ts
│   │   ├── Utils
│   │   │   └── index.ts
│   │   ├── assets
│   │   │   ├── demo.gif
│   │   │   ├── logo.svg
│   │   │   ├── map.gif
│   │   │   ├── mapdemo.gif
│   │   │   └── spin.gif
│   │   └── hooks
│   │   └── useGetData.ts
│   ├── Home.tsx
│   ├── Join
│   │   ├── Atoms
│   │   │   └── index.tsx
│   │   ├── Components
│   │   │   ├── FindPwTap
│   │   │   │   ├── index.tsx
│   │   │   │   └── styled.ts
│   │   │   ├── HelperText
│   │   │   │   └── index.tsx
│   │   │   ├── JoinTap
│   │   │   │   ├── index.tsx
│   │   │   │   └── styled.ts
│   │   │   ├── LoginDialog
│   │   │   │   ├── HelperText
│   │   │   │   │   └── index.tsx
│   │   │   │   ├── favicon.svg
│   │   │   │   ├── index.tsx
│   │   │   │   └── styled.ts
│   │   │   └── LoginTap
│   │   │   ├── index.tsx
│   │   │   └── styled.ts
│   │   ├── Page
│   │   │   ├── index.tsx
│   │   │   └── styled.ts
│   │   └── Utils
│   │   └── index.tsx
│   ├── Maps
│   │   ├── index.tsx
│   │   └── styled.ts
│   ├── Menu
│   │   └── Page
│   │   ├── index.tsx
│   │   └── styled.ts
│   ├── MyPage
│   │   ├── Components
│   │   │   ├── MylikeTap
│   │   │   │   ├── index.tsx
│   │   │   │   └── styled.ts
│   │   │   ├── MypostTap
│   │   │   │   ├── index.tsx
│   │   │   │   └── styled.ts
│   │   │   └── Nothing
│   │   │   ├── index.tsx
│   │   │   ├── nothing.svg
│   │   │   └── styled.ts
│   │   ├── Page
│   │   │   ├── index.tsx
│   │   │   └── styled.ts
│   │   ├── Utils
│   │   │   └── index.tsx
│   │   └── assets
│   │   ├── defaultProfile.png
│   │   └── likeIcon.svg
│   ├── PhotoLists
│   │   ├── Components
│   │   │   └── TopButton
│   │   │   ├── index.tsx
│   │   │   └── styled.ts
│   │   ├── Page
│   │   │   ├── index.tsx
│   │   │   └── styled.ts
│   │   └── utils
│   │   ├── getRandomArbitrary.ts
│   │   └── getRandomHashtags.ts
│   ├── PhotoPost
│   │   └── Page
│   │   ├── index.tsx
│   │   └── styled.ts
│   └── Post
│   ├── Apis
│   │   └── index.ts
│   ├── Page
│   │   ├── SelectMap.tsx
│   │   ├── index.tsx
│   │   └── styled.ts
│   └── Utils
│   ├── Tooltip
│   │   └── index.tsx
│   └── Validation
│   └── index.tsx
├── Router.tsx
├── axiosInstance.tsx
├── index.tsx
├── react-app-env.d.ts
├── style.d.ts
├── theme.ts
└── treeReadMe.txt

66 directories, 101 files

</details>
