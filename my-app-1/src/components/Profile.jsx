import s from './Profile.module.css';
const Profile = () => {
    return (
        <div className={s.main}>
            <div className={s.main__bgImage}>
                <img src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?fit=2850%2C1801&ssl=1" alt=""/>
            </div>
            <div className={s.profileInfo}>
                <div className={s.profileInfo__image}>
                    <img src="https://i.pinimg.com/474x/97/aa/84/97aa847d061a14894178805f1d551500.jpg" alt=""/>
                </div>
                <div className={`${s.profileInfo__info} ${s.infoProfile}`}>
                    <div className={s.infoProfile__name}>Ghena B</div>
                    <div className={s.infoProfile__contact}>future web developer <br/> city: Ungheni <br/> age: 24</div></div>
            </div>
            <div className={s.posts}>
                <div className={s.posts__title}>My posts</div>
                <div className={s.posts__addPost}></div>
                <div className={s.posts__currentPosts}>I am not tired  </div>
            </div>
        </div>
    )
};
export default Profile;