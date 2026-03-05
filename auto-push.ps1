while ($true) {
    git add .
    git commit -m "auto update" 2>$null
    git push
    Start-Sleep -Seconds 5
}
# 5 giây kiểm tra 1 lần Có thay đổi → commit → push
