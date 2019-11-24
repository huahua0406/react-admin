import React from 'react';
import { Breadcrumb } from 'antd';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
// 更多配置请移步 https://github.com/icd2k3/react-router-breadcrumbs-hoc
import { NavLink } from 'react-router-dom';
import routes from '@/routes';

const CustomBreadcrumb = ({ breadcrumbs }) => (
	<Breadcrumb style={{
        padding: '12px 24px'
    }}>
		{breadcrumbs.map(({ match, breadcrumb }, index) => (
			<Breadcrumb.Item key={match.url}>
				<NavLink to={match.url}>{breadcrumb}</NavLink>
			</Breadcrumb.Item>
		))}
	</Breadcrumb>
);

export default withBreadcrumbs(routes)(CustomBreadcrumb);
