import { FileBlank } from '@styled-icons/boxicons-solid/FileBlank';
import { IconProps } from '../interfaces/IconsProps';

const FileIcon : React.FC<IconProps> = ({size}) => {
    return <FileBlank size={size} />
}

export default FileIcon;