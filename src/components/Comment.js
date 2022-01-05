import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { StyledCard } from "../styles/global";

const Comment = (id) => {
    const [commentDetails, setCommentDetails] = useState({});

    const fetchCommentData = useCallback(async() => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id.id}`);

            setCommentDetails(res.data);
        }
        catch (e) {

        }
    }, [id]);

    useEffect(() => {
        fetchCommentData();
    }, [fetchCommentData]);

    return (
        <StyledCard>
        {'Name: ' +  commentDetails.name}
        </StyledCard>
    );
}

export default Comment;

  