import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setOpenLoginPopupWindow } from '@/store/indexSlice.js'
import { Modal } from 'antd'
export default function AlertDialog(props, ref) {
    const dispatch = useDispatch()
    const openLoginPopupWindow = useSelector(
        (state) => state.index.openLoginPopupWindow
    )
    if (!openLoginPopupWindow) return null // 如果弹窗不可见，则不渲染
    const onGithubLogin = () => {
        window.location.href =
            'https://github.com/login/oauth/authorize?client_id=Ov23livtQ9xuNOASKNvA&redirect_uri=http://localhost:8000'
    }
    const onGoogleLogin = () => {
        window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=17707591741-8ujtnqpq4uv18jumsd8vddqe7l45rt3o.apps.googleusercontent.com&redirect_uri=http://localhost:8000&response_type=code&scope=profile email`
    }

    return (
        <React.Fragment>
            <Modal
                open={true}
                title="Log in"
                onOk={() => dispatch(setOpenLoginPopupWindow(false))}
            >
                <div onClick={onGithubLogin}>
                    <svg className="icon" ariaHidden="true">
                        <use xlinkHref="#icon-google"></use>
                    </svg>
                    Continue with Github
                </div>
                <div onClick={onGoogleLogin}>
                    <svg className="icon" ariaHidden="true">
                        <use xlinkHref="#icon-google"></use>
                    </svg>
                    Continue with Github
                </div>
            </Modal>

            {/* <Dialog
                open={true}
                onClose={() => dispatch(setOpenLoginPopupWindow(false))}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" className="text-center">
                    Log in
                </DialogTitle>
                <DialogContent className="my-4 !px-10">
                    <DialogContentText
                        className="flex flex-col gap-4"
                        id="alert-dialog-description"
                    >
                        <Button
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            onClick={onGithubLogin}
                        >
                            Continue with Github
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<GoogleIcon />}
                            onClick={onGoogleLogin}
                        >
                            Continue with Google
                        </Button>
                    </DialogContentText>
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog> */}
        </React.Fragment>
    )
}
