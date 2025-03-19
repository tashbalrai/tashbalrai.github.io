"use client";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
    EmailIcon,
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
} from "react-share";

interface IProps {
    pageUrl: string;
}

const SocialShare = ({ pageUrl }: IProps) => {
    return (
        <div className="flex gap-2">
            <LinkedinShareButton url={pageUrl}>
                <FaLinkedin
                    style={{ fontSize: "1.25rem" }}
                    className="text-(--text-color)"
                />
            </LinkedinShareButton>
            <FacebookShareButton url={pageUrl}>
                <FaFacebook
                    style={{ fontSize: "1.25rem" }}
                    className="text-(--text-color)"
                />
            </FacebookShareButton>
            <EmailShareButton url={pageUrl}>
                <MdEmail
                    style={{ fontSize: "1.25rem" }}
                    className="text-(--text-color)"
                />
            </EmailShareButton>
        </div>
    );
};

export default SocialShare;
