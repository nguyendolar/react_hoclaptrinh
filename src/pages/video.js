// src/pages/Home.js
import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import {Link ,useParams} from "react-router-dom";
import {getDetail} from "../services/courseVideo/courseVideo.service";
import {getCourseDetail} from "../services/course/course.service";
import _ from "lodash";

const Video = () => {
  const [courseVideo, setCourseVideo] = React.useState(null);
  const [course, setCourse] = React.useState(null);
  const { id,idCourse } = useParams();
  React.useEffect(() => {
      const fetchData = async () => {
          try
          {
              const result = await getDetail(id);
              console.log("setCourseVideo", result)

              // Cập nhật state với dữ liệu nhận được
              setCourseVideo(result.data);
          } catch (error)
          {
              console.error('Error fetching data:', error);
          }
      };
      // Gọi hàm fetchData
      fetchData();
  }, [id])
  React.useEffect(() => {
    const fetchData = async () => {
        try
        {
            const result = await getCourseDetail(idCourse);
            console.log("setCourse", result)
            // Cập nhật state với dữ liệu nhận được
            setCourse(result.data);
        } catch (error)
        {
            console.error('Error fetching data:', error);
        }
    };
    // Gọi hàm fetchData
    fetchData();
}, [idCourse])
  return (
    <div>
      <Header />
      <main>
      <section className="single-blog-wrap-layout1">
    <section className="single-blog-wrap-layout2">
        <div className="container">
            <div className="single-blog-box-layout2">
                <div className="blog-banner">
                <img src="https://dotnetguru.org/wp-content/uploads/2023/06/tim-hieu-ngon-ngu-html.jpg" alt="blog" 
                    style={{ width: '100%', height: '450px' }}/>
                </div>
                <div className="single-blog-content">
                    <div className="blog-entry-content">
                       <ul className="entry-meta meta-color-dark">
                        <li><i className="fas fa-tag"></i>{course?.courseType.typeName}</li>
                        <li><i className="fas fa-calendar-alt"></i>{course?.free ? 'Miễn phí' : 'Có phí :' + course?.price + 'VNĐ'}  </li>
                        <li><i className="far fa-clock"></i>{course?.courseVideos.length} Videos</li>
                       </ul>
                      <h2 className="item-title">{course?.courseName}</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="container">
        <div className="row gutters-50">
            <div className="col-lg-12">
                <div className="single-blog-box-layout1">
                    <div className="blog-details">
                        <iframe width="100%" height="621" src={courseVideo?.videoUrl}
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                    </div>

                </div>
            </div>
            {/* <div className="col-lg-12 sidebar-widget-area sidebar-break-md">
                <div className="widget">
                    <div className="section-heading heading-dark">
                        <h3 className="item-heading">Danh sách Video khác trong khóa học </h3>
                    </div>
                    <div className="widget-latest">
                        <div className="row gutters-50">                           
                        <div className="col-lg-6" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div className="item-img" style={{ marginRight: '15px', marginTop: '5px', position: 'relative', overflow: 'hidden' }}>
                <Link to="/video">
                  <img
                    src="https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-video-player-3d-icon-png-image_6585971.png"
                    alt="Post"
                    style={{ width: '140px', height: '77px', objectFit: 'cover' }}
                  />
                </Link>
              </div>
      <div className="item-content" style={{ flex: 1 }}>
        <h4
          className="item-title"
          style={{
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1.5,
            marginBottom: 0,
            color: '#111111',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            display: '-webkit-box',
          }}
        >
          <a href="#" style={{ color: '#111111' }}>
            Bài 2 : Tiếp theo
          </a>
          <br />
          <Link to="/video" style={{ color: '#111111' }} className="item-btn">
            Xem Video <i className="fas fa-play"></i>
          </Link>
        </h4>
      </div>
    </div>

    <div className="col-lg-6" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
      <div className="item-img" style={{ marginRight: '15px', marginTop: '5px', position: 'relative', overflow: 'hidden' }}>
        <Link to="/video">
          <img
            src="https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-video-player-3d-icon-png-image_6585971.png"
            alt="Post"
            style={{ width: '140px', height: '77px', objectFit: 'cover' }}
          />
        </Link>
      </div>
      <div className="item-content" style={{ flex: 1 }}>
        <h4
          className="item-title"
          style={{
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1.5,
            marginBottom: 0,
            color: '#111111',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            display: '-webkit-box',
          }}
        >
          <a href="#" style={{ color: '#111111' }}>
            Bài 2 : Tiếp theo
          </a>
          <br />
          <Link to="/video" style={{ color: '#111111' }} className="item-btn">
            Xem Video <i className="fas fa-play"></i>
          </Link>
        </h4>
      </div>
    </div>

    <div className="col-lg-6" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
      <div className="item-img" style={{ marginRight: '15px', marginTop: '5px', position: 'relative', overflow: 'hidden' }}>
        <Link to="/video">
          <img
            src="https://png.pngtree.com/png-vector/20230206/ourlarge/pngtree-video-player-3d-icon-png-image_6585971.png"
            alt="Post"
            style={{ width: '140px', height: '77px', objectFit: 'cover' }}
          />
        </Link>
      </div>
      <div className="item-content" style={{ flex: 1 }}>
        <h4
          className="item-title"
          style={{
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: 1.5,
            marginBottom: 0,
            color: '#111111',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            display: '-webkit-box',
          }}
        >
          <a href="#" style={{ color: '#111111' }}>
            Bài 2 : Tiếp theo
          </a>
          <br />
          <Link to="/video" style={{ color: '#111111' }} className="item-btn">
            Xem Video <i className="fas fa-play"></i>
          </Link>
        </h4>
      </div>
    </div>

                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</section>
      </main>
      <Footer />
    </div>
  );
};

export default Video;
