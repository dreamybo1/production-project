import { classNames } from "shared/lib/classNames/classNames"
import styles from './Sidebar.module.scss'
import { FC, useState } from "react";
import { Button } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {className} = props

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.collapsed]: collapsed}, [className])}>
            <Button
                onClick={onToggle}
            >
                toggle
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                {/* lang switcher */}
            </div>
        </div>
    )
}