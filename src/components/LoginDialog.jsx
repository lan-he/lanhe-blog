import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useSelector, useDispatch } from 'react-redux'
import { setIsOpenLogin } from '@/store/indexReducer.js'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function AlertDialog(props, ref) {
    const dispatch = useDispatch()
    const isOpenLogin = useSelector((state) => state.index.isOpenLogin)
    if (!isOpenLogin) return null // 如果弹窗不可见，则不渲染
    const onGithubLogin = () => {
        window.location.href =
            'https://github.com/login/oauth/authorize?client_id=Ov23livtQ9xuNOASKNvA&redirect_uri=http://localhost:8000'
    }
    return (
        <React.Fragment>
            <Dialog
                open={true}
                onClose={() => dispatch(setIsOpenLogin(false))}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" className="text-center">
                    Log in
                </DialogTitle>
                <DialogContent className="my-4 !px-10">
                    <DialogContentText id="alert-dialog-description">
                        <Button
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            onClick={onGithubLogin}
                        >
                            Continue with Github
                        </Button>
                    </DialogContentText>
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
