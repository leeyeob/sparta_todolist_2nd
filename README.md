# "엽이의 To do List" 설명
## 폴더구조
- 폴더 구조는 src{components, pages, redux(config, modules), shared}로 구성되어 있습니다.
- component를 폴더에 모았는데, 사실상 todo component에 대부분의 내용이 들어가서 component를 나누는 효과가 떨어지는 것 같습니다.
- router를 연습해보기 위해서 페이지는 home{todo(detail)}이렇게 구성해보았습니다.
- redux관련 파일은 redux폴더에 모았습니다.


## 기능 설명
### input 버튼
- 제목과 내용을 입력하고 '할일 추가' 버튼을 누르면 리스트가 추가 됩니다.
    - 만약, 제목이나 내용이 비어있으면 "~~을 입력하세요"라는 메시지 상자가 뜹니다.
    - 목록이 추가 되면 input상자의 내용은 지워집니다.
- 엔터를 누르면 '할일 추가'와 똑같은 효과를 내도록 하였습니다.
    - 마우스를 사용하지 않고, 키보드만을 이용하여 할일 추가를 할 수 있습니다.
### 삭제, 완료, 상세 버튼
- 삭제버튼은 완료 혹은 미완료 목록을 삭제합니다.
- 완료 버튼은 Done으로 이동, 취소 버튼은 Working으로 이동합니다.
- 상세 버튼은 목록의 상제 페이지를 열어줍니다.
### todo id 생성 방식
- todo id 생성시 현재날짜와 시간을 활용하였습니다.
    - id는 YYYYMMDDhhmmsssss 입니다.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
